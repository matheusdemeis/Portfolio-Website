import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

/* ── Contact: fades in + slides up 16px on first scroll into view ── */
export default function Contact() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 bg-slate-800/50"
      initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-8">Let's Work Together</h3>
        <p className="text-lg text-slate-300 mb-12">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <a href="mailto:matheus.demeis@gmail.com" className="p-3 bg-slate-700 rounded-lg hover:bg-primary transition hover:text-slate-900">
            <Mail size={24} />
          </a>
          <a href="https://github.com/MatheusDemeis" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-lg hover:bg-primary transition hover:text-slate-900">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/matheus-demeis" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-lg hover:bg-primary transition hover:text-slate-900">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </motion.section>
  );
}