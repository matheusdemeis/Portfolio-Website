import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { profileImages } from '../data/images';

/* ─── Hero ──────────────────────────────────────────────
   Entrance: staggered fade-up for name → subtitle → CTA
   Slope line: faint diagonal behind content (downhill metaphor)
   Photo card: tilt on hover, micro-parallax on mouse move
   ────────────────────────────────────────────────────── */

export default function Hero() {
  const [profileImage, setProfileImage] = useState(0);
  const prefersReduced = useReducedMotion();
  const cardRef = useRef(null);
  const sectionRef = useRef(null);

  /* ── Rotating profile images ────────────────────────── */
  useEffect(() => {
    const interval = setInterval(() => {
      setProfileImage((prev) => (prev + 1) % profileImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* ── Micro-parallax: photo card follows mouse 3-6px ── */
  const handleMouseMove = useCallback(
    (e) => {
      if (prefersReduced) return;
      // Disable on mobile-width viewports
      if (window.innerWidth < 768) return;
      const card = cardRef.current;
      if (!card) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;  // ±3px
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
      card.style.transform = `translate(${x}px, ${y}px)`;
    },
    [prefersReduced]
  );

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) cardRef.current.style.transform = 'translate(0,0)';
  }, []);

  /* ── Stagger entrance variants (run once) ──────────── */
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18 } },
  };
  const fadeUp = prefersReduced
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
      };

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-20 px-4 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Slope line: faint diagonal (downhill / journey metaphor) ── */}
      {!prefersReduced && (
        <div
          aria-hidden="true"
          className="slope-line pointer-events-none absolute"
          style={{
            top: '15%',
            left: '-10%',
            width: '140%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(203,180,138,0.07) 30%, rgba(203,180,138,0.07) 70%, transparent 100%)',
            transform: 'rotate(-8deg)',
            filter: 'blur(1px)',
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
          {/* ── Text column: staggered entrance ── */}
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

            {/* ── Resume button with micro-interaction ── */}
            <motion.a
              variants={fadeUp}
              href="https://drive.google.com/file/d/1ZdFIWai4tuV6fbujF35RjfooWv5E45zw/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn inline-flex items-center gap-2 bg-primary text-secondary px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.97]"
              whileHover={prefersReduced ? {} : { scale: 1.02 }}
              whileTap={prefersReduced ? {} : { scale: 0.97 }}
            >
              View Resume
              {/* Arrow shifts right on hover via CSS (see globals.css) */}
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

          {/* ── Photo card: parallax + hover tilt + glow ── */}
          <div className="flex justify-center">
            <motion.div
              ref={cardRef}
              className="photo-card relative"
              style={{ transition: 'transform 0.15s ease-out' }}
              whileHover={
                prefersReduced
                  ? {}
                  : { rotateY: 2, rotateX: -1, scale: 1.01 }
              }
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <img
                src={profileImages[profileImage]}
                alt="Profile"
                className="w-80 h-80 rounded-lg border-2 border-primary object-cover shadow-xl transition-all duration-500 photo-card-img"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}