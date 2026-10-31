import type { ReactElement } from 'react';
import { projects } from '../data/projects';
import { experience } from '../data/experience';
import Experience from './Experience';
import ProjectsCompact from './ProjectsCompact';
import Section from './Section';

interface SocialLink {
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/MatheusDemeis' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/matheus-demeis' },
  {
    label: 'Resume',
    href: 'https://drive.google.com/file/d/1BGYW_WSx6KrvkthyuJC-yIj5DQ9Ma_WU/view?usp=sharing',
  },
];

export default function Hero(): ReactElement {
  return (
    <main className="px-6 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-5xl">
        <section className="mb-16 border-b border-slate-800 pb-12">
          <h1 className="text-5xl font-semibold tracking-tight leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            Matheus Demeis
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-300 sm:text-[1.2rem]">
            Full-Stack Developer building thoughtful digital products.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-300">
            I turn complex ideas into practical web applications, connecting
            product decisions and interface design with backend logic and
            real-world integrations.
          </p>
          <p className="mt-4 text-sm tracking-[0.06em] text-stone-400">
            São Paulo, Brazil
          </p>
          <nav
            className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm"
            aria-label="Social links"
          >
            {socialLinks.map((link, index: number) => (
              <div key={link.label} className="flex items-center gap-3">
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="text-stone-300 underline underline-offset-4 decoration-slate-600 transition hover:text-primary hover:decoration-primary"
                >
                  {link.label}
                </a>
                {index < socialLinks.length - 1 && (
                  <span aria-hidden="true" className="text-slate-600">
                    /
                  </span>
                )}
              </div>
            ))}
          </nav>
        </section>

        <Section id="about" title="About">
          <div className="space-y-4 text-[1.06rem] leading-relaxed text-stone-300 sm:text-[1.1rem]">
            <p>
              I’m a full-stack developer from Brazil, based in São Paulo. I
              completed the Full-Stack Web Development diploma at the British
              Columbia Institute of Technology (BCIT) in Canada, where I built
              applications across the frontend and backend.
            </p>

            <p>
              I’m interested in how technology and product decisions come
              together to solve everyday problems. My work spans a personal
              music-discovery project, a collaborative childcare scheduling
              capstone, and professional SaaS development for insurance advisors.
            </p>

            <p>
              These projects have taught me to think beyond individual features:
              understand the problem, work through tradeoffs with teammates, and
              take responsibility for how the pieces fit together. I value clear
              communication, thoughtful feedback, and improving the work through
              each iteration.
            </p>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <Experience items={experience} />
        </Section>

        <Section id="projects" title="Projects" className="mb-6">
          <ProjectsCompact projects={projects} />
        </Section>
      </div>
    </main>
  );
}
