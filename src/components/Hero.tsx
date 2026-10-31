import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="intro-heading">
      <div className="hero-meta"><span>Full-Stack Developer</span><span>São Paulo, Brazil</span></div>
      <h1 id="intro-heading">Matheus Demeis<span className="text-primary">.</span></h1>
      <div className="hero-body">
        <p className="hero-positioning">Full-Stack Developer building <span>thoughtful digital products.</span></p>
        <div className="hero-support">
          <p>I turn complex ideas into practical web applications, connecting product decisions and interface design with backend logic and real-world integrations.</p>
          <div className="hero-actions">
            <a href="#projects" className="primary-action">Explore My Work <ArrowDown size={17} aria-hidden="true" /></a>
            <a href={socialLinks[2].href} target="_blank" rel="noopener noreferrer" className="text-action">View Résumé <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
