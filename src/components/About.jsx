import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { profileImages } from '../data/images';

export default function About() {
  const prefersReduced = useReducedMotion();
  const [profileImage, setProfileImage] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProfileImage((prev) => (prev + 1) % profileImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="about"
      className="py-20 px-4"
      initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Intro row: Hey I'm Matheus + photo */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              Matheus Demeis
            </h2>
            <p className="text-xl text-primary mb-3 font-medium">Full Stack Web Developer</p>
            <p className="text-lg text-slate-300">
              Building clean, functional web applications with modern technologies
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            style={{ perspective: '800px' }}
            initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              ref={cardRef}
              className="photo-card"
              style={{ willChange: 'transform', transition: 'transform 0.2s ease-out' }}
            >
              <img
                src={profileImages[profileImage]}
                alt="Profile"
                className="w-80 h-80 rounded-lg border-2 border-primary object-cover shadow-xl transition-all duration-500 photo-card-img"
                style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 0 2px var(--color-primary, #CBB48A)' }}
              />
            </div>
          </motion.div>
        </div>

        {/* About Me card */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          <h3 className="text-4xl font-bold mb-8 text-center">About Me</h3>
          <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-8">
            <p className="text-lg text-slate-300 mb-6">
              I'm a Full Stack Web Developer in Vancouver, BC.
              Video games sparked my curiosity about technology as a kid, and I've been hooked
              ever since. Now I see myself constantly exploring how things work and building cool stuff.
            </p>
            <p className="text-lg text-slate-300">
              Outside of coding, I'm passionate about sports and gaming. I thrive in
              collaborative environments and enjoy working with others to bring ideas to life.
            </p>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}