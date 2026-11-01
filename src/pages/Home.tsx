import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import ProjectsCompact from '../components/ProjectsCompact';
import Section from '../components/Section';
import { projects } from '../data/projects';
import { experience } from '../data/experience';

export default function Home() {
  return (
    <div className="homepage">
      <a className="skip-link" href="#projects">Skip to projects</a>
      <header className="site-header">
        <a className="wordmark" href="#intro-heading" aria-label="Matheus Demeis introduction">MD<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#projects">Work</a><a href="#experience">Experience</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
      </header>
      <Hero />
      <Section id="projects" title="Featured projects" number="01"><ProjectsCompact projects={projects} /></Section>
      <Section id="experience" title="Experience & education" number="02"><Experience items={experience} /></Section>
      <About />
      <Contact />
    </div>
  );
}
