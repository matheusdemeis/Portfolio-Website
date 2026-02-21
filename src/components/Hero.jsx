import { useEffect, useRef, useCallback } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const snowboarding = "/snowboarding.jpg";

// Brand colors (matched to your logo)
const BRAND_BLUE = "#0E334F";
const BRAND_GOLD = "#CBAB7D";
const BRAND_GOLD_SOFT = "#F3E2C6";

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const heroRef = useRef(null);
  const bgRef = useRef(null);

  // rAF throttle for mousemove
  const rafId = useRef(null);
  const lastPos = useRef({ nx: 0, ny: 0 });

  const { scrollY } = useScroll();
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentY = useTransform(scrollY, [0, 300], ["0px", "-60px"]);

  const applyParallax = useCallback(() => {
    rafId.current = null;
    const { nx, ny } = lastPos.current;

    if (bgRef.current) {
      bgRef.current.style.transform = `translate(${nx * 12}px, ${ny * 12}px) scale(1.05)`;
    }
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (prefersReduced || window.innerWidth < 768) return;

      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;

      lastPos.current = { nx, ny };

      if (rafId.current) return;
      rafId.current = requestAnimationFrame(applyParallax);
    },
    [prefersReduced, applyParallax]
  );

  const handleMouseLeave = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = null;

    if (bgRef.current) bgRef.current.style.transform = "translate(0,0) scale(1.05)";
  }, []);

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
  };

  const fadeUp = prefersReduced
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
        },
      };

  const fadeIn = prefersReduced
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
      };

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100dvh" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <div
          ref={bgRef}
          style={{
            position: "absolute",
            inset: "-5%",
            backgroundImage: `url(${snowboarding})`,
            backgroundSize: "cover",
            backgroundPosition: "center 45%",
            transform: "scale(1.05)",
            willChange: "transform",
            transition: "transform 0.5s ease-out",
          }}
        />

        {/* Overlay gradients */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(8,12,22,0.28) 0%, rgba(8,12,22,0.42) 55%, rgba(8,12,22,0.72) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, transparent 42%, rgba(8,12,22,0.45) 100%)",
          }}
        />
      </motion.div>

      {/* Top accent bar (brand colors) */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: `linear-gradient(90deg, ${BRAND_BLUE} 0%, ${BRAND_GOLD} 55%, ${BRAND_GOLD_SOFT} 100%)`,
          zIndex: 10,
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: "clamp(3.4rem, 11vw, 9rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              marginBottom: "0.3rem",
              textShadow: "0 4px 40px rgba(0,0,0,0.5)",
            }}
          >
            Matheus
          </motion.h1>

          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: "clamp(3.4rem, 11vw, 9rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              background: `linear-gradient(135deg, ${BRAND_GOLD} 0%, ${BRAND_GOLD_SOFT} 45%, ${BRAND_GOLD} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1.75rem",
              filter: "drop-shadow(0 2px 22px rgba(203,171,125,0.28))",
            }}
          >
            Demeis
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "clamp(0.9rem, 2.2vw, 1.25rem)",
              color: "rgba(255,255,255,0.72)",
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "2.2rem",
              textShadow: "0 2px 16px rgba(0,0,0,0.35)",
            }}
          >
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="https://drive.google.com/file/d/1pBZ59EEspNCc_PsjDEmAxCLtuVbtd6uD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={prefersReduced ? {} : { scale: 1.04, filter: "brightness(1.05)" }}
            whileTap={prefersReduced ? {} : { scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: `linear-gradient(135deg, ${BRAND_GOLD}, ${BRAND_GOLD_SOFT})`,
              color: BRAND_BLUE,
              padding: "14px 34px",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "0.04em",
              textDecoration: "none",
              border: "1px solid rgba(203,171,125,0.55)",
              boxShadow: "0 10px 38px rgba(203,171,125,0.28)",
            }}
          >
            View Resume
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {!prefersReduced && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}