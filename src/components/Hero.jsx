import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { profileImages } from '../data/images';

/* ─── Hero ──────────────────────────────────────────────
   Intent: communicate momentum / downhill flow abstractly.
   Every animation here is deliberately understated.

   1. Entrance  – staggered fade-up, runs once on mount
   2. Slope line – faint diagonal suggesting downhill motion
   3. Parallax  – photo card + bg gradient track the mouse
   4. Photo     – hover tilt, shadow bloom, border glow
   5. CTA       – arrow nudge, pressed feedback
   ────────────────────────────────────────────────────── */

export default function Hero() {
  const [profileImage, setProfileImage] = useState(0);
  const prefersReduced = useReducedMotion();
  const cardRef = useRef(null);
  const bgRef = useRef(null);
  const sectionRef = useRef(null);

  /* ── Rotating profile images ───────────────────────── */
  useEffect(() => {
    const interval = setInterval(() => {
      setProfileImage((prev) => (prev + 1) % profileImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* ── Micro-parallax on mouse move ──────────────────── *
   * Photo card: ±3px translation (subtle, premium feel)
   * Background: ±1px shift (barely perceptible depth)
   * Disabled on mobile & reduced-motion                  */
  const handleMouseMove = useCallback(
    (e) => {
      if (prefersReduced || window.innerWidth < 768) return;

      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;

      // Normalise cursor position to -0.5…+0.5
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;

      // Photo card: ±3px translation + ±1.5deg tilt
      if (cardRef.current) {
        cardRef.current.style.transform =
          `translate(${nx * 6}px, ${ny * 6}px) rotateY(${nx * 1.5}deg) rotateX(${-ny * 1.5}deg)`;
      }

      // Background gradient: ±1px (barely-there depth cue)
      if (bgRef.current) {
        bgRef.current.style.transform =
          `translate(${nx * 2}px, ${ny * 2}px)`;
      }
    },
    [prefersReduced]
  );

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current)
      cardRef.current.style.transform = 'translate(0,0) rotateY(0) rotateX(0)';
    if (bgRef.current)
      bgRef.current.style.transform = 'translate(0,0)';
  }, []);

  /* ── Stagger entrance variants (run once) ──────────── *
   * ~120ms between each element, 14px upward travel      */
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const fadeUp = prefersReduced
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 14 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        },
      };

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-20 px-4 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Background gradient layer (receives micro-parallax) ── */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          willChange: 'transform',
          transition: 'transform 0.3s ease-out',
          zIndex: 0,
        }}
      />

      {/* ── Slope line: faint diagonal (downhill / journey metaphor) ──
           A single thin line at ~-8° suggests momentum and downhill
           movement. Low opacity so it's felt, not seen.              */}
      {!prefersReduced && (
        <div
          aria-hidden="true"
          className="slope-line pointer-events-none absolute"
          style={{
            top: '18%',
            left: '-10%',
            width: '140%',
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(203,180,138,0.06) 25%, rgba(203,180,138,0.08) 50%, rgba(203,180,138,0.06) 75%, transparent 100%)',
            transform: 'rotate(-8deg)',
            filter: 'blur(0.5px)',
            zIndex: 0,
          }}
        />
      )}

      <motion.div
        className="max-w-6xl mx-auto relative z-[1]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ── Text column: staggered entrance ────────── */}
          <div>
            <motion.h2
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
            >
              Matheus Demeis
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-2xl text-primary mb-4 font-medium"
            >
              Full Stack Web Developer
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-300 mb-8"
            >
              Building clean, functional web applications with modern technologies
            </motion.p>

            {/* ── Resume CTA: arrow nudge + pressed feedback ── */}
            <motion.a
              variants={fadeUp}
              href="https://drive.google.com/file/d/1pBZ59EEspNCc_PsjDEmAxCLtuVbtd6uD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn inline-flex items-center gap-2 bg-primary text-secondary px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/15 active:scale-[0.97]"
              whileHover={prefersReduced ? {} : { scale: 1.015 }}
              whileTap={prefersReduced ? {} : { scale: 0.97 }}
            >
              View Resume
              {/* Arrow shifts right on hover (CSS in globals.css) */}
              <svg
                className="resume-arrow w-4 h-4 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </div>

          {/* ── Photo card: parallax + hover glow ─────── *
           *  Parallax (mouse-tracking) applied via ref     *
           *  Hover glow/shadow applied via CSS class       *
           *  Kept separate to avoid transform conflicts    */}
          <div className="flex justify-center" style={{ perspective: '800px' }}>
            <div
              ref={cardRef}
              className="photo-card"
              style={{
                willChange: 'transform',
                transition: 'transform 0.2s ease-out',
              }}
            >
              <img
                src={profileImages[profileImage]}
                alt="Profile"
                className="w-80 h-80 rounded-lg border-2 border-primary object-cover shadow-xl transition-all duration-500 photo-card-img"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}