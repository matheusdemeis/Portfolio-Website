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
            Full-stack developer focused on shipping clean, scalable web apps,
            product-first and detail-driven.
          </p>
          <p className="mt-4 text-sm tracking-[0.06em] text-stone-400">
            Vancouver, BC
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
              Full Stack Developer focused on building scalable SaaS products
              with strong architectural foundations and real business impact.
              I’m currently contributing to a greenfield platform at Vero
              Ventures while completing my Full-Stack Web Development diploma at
              BCIT.
            </p>

            <p>
              I work primarily with Next.js and TypeScript, and I care deeply
              about clean system design, maintainable code, and shipping
              production-ready features that hold up as products grow.
            </p>

            <p>
              I’m drawn to environments where technical decisions matter,
              ownership is expected, and shipping real solutions is the
              priority.
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
