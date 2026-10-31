import { ArrowUpRight } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';
import Section from './Section';

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch" number="04" className="contact-section">
      <div className="contact-layout">
        <p className="contact-heading">Let’s connect<span className="text-primary">.</span></p>
        <div>
          <p className="text-stone-400">Explore my code, connect on LinkedIn, or take a look at my resume.</p>
          <nav aria-label="Professional links" className="contact-links">
            {socialLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-action">{link.label}<ArrowUpRight size={17} aria-hidden="true" /></a>)}
          </nav>
        </div>
      </div>
    </Section>
  );
}
