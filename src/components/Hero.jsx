import { projects } from '../data/projects';
import Experience from './Experience';
import ProjectsCompact from './ProjectsCompact';
import Section from './Section';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/MatheusDemeis' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/matheus-demeis' },
   {
    label: 'Resume',
    href: 'https://drive.google.com/file/d/1pBZ59EEspNCc_PsjDEmAxCLtuVbtd6uD/view?usp=sharing',
  },
];

const experienceItems = [...projects]
  .sort((a, b) => Number(b.year) - Number(a.year))
  .map((project) => ({
    id: project.id,
    title: project.brand.name,
    role: project.role,
    timeline: project.timeline,
    year: project.year,
    impacts: project.rationale.slice(0, 3),
    tech: project.tags.slice(0, 4),
  }));

export default function Hero() {
  return (
    <main className="px-6 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-5xl">
        <section className="mb-16 border-b border-slate-800 pb-12">
          <h1 className="text-5xl font-semibold tracking-tight leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            Matheus Demeis
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-300 sm:text-[1.2rem]">
            Full-stack developer focused on shipping clean, scalable web apps, product-first
            and detail-driven.
          </p>
          <p className="mt-4 text-sm tracking-[0.06em] text-stone-400">
            Vancouver, BC
          </p>
          <nav className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm" aria-label="Social links">
            {socialLinks.map((link, index) => (
              <div key={link.label} className="flex items-center gap-3">
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-stone-300 underline underline-offset-4 decoration-slate-600 transition hover:text-primary hover:decoration-primary"
                >
                  {link.label}
                </a>
                {index < socialLinks.length - 1 && (
                  <span aria-hidden="true" className="text-slate-600">/</span>
                )}
              </div>
            ))}
          </nav>
        </section>

        <Section id="about" title="About">
          <div className="space-y-4 text-[1.06rem] leading-relaxed text-stone-300 sm:text-[1.1rem]">
            <p>
              I build web products with a product mindset: clear user value first, then durable
              implementation decisions that hold up as features scale.
            </p>
            <p>
              I care about shipping consistently, validating quickly, and iterating like a
              builder-operator with an entrepreneurial lens.
            </p>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <Experience items={experienceItems} />
        </Section>

        <Section id="projects" title="Projects" className="mb-6">
          <ProjectsCompact projects={projects} />
        </Section>
      </div>
    </main>
  );
}
