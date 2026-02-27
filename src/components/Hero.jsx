import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/MatheusDemeis' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/matheus-demeis' },
  { label: 'Email', href: 'mailto:matheus.demeis@gmail.com' },
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
    summary: project.description,
  }));

export default function Hero() {
  return (
    <main className="px-6 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-5xl">
        <section className="mb-16 border-b border-slate-800 pb-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h1 className="text-5xl font-semibold tracking-tight leading-[1.08] text-white sm:text-6xl lg:text-7xl">
                Matheus Demeis
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300 sm:text-[1.2rem]">
                Full-stack developer focused on shipping clean, scalable web apps, product-first
                and detail-driven.
              </p>
            </div>

            <div className="md:justify-self-end">
              <dl className="space-y-3 text-sm sm:text-base">
                <div className="flex gap-2">
                  <dt className="w-20 text-stone-500">Location</dt>
                  <dd className="text-stone-200">Vancouver, BC</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-20 text-stone-500">Currently</dt>
                  <dd className="text-stone-200">Building InsurFlow + Tandem (BCIT FSWD).</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-20 text-stone-500">Focus</dt>
                  <dd className="text-stone-200">SaaS product delivery, strong UX, reliable systems.</dd>
                </div>
              </dl>
            </div>
          </div>

          <nav className="mt-8 flex flex-wrap gap-3 text-sm" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-stone-300 transition hover:border-primary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </section>

        <section id="about" className="mb-14">
          <p className="mb-4 font-mono text-sm text-primary">~/about</p>
          <div className="space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              I am a full stack web developer focused on thoughtful product development and
              reliable implementation.
            </p>
            <p>
              Video games sparked my curiosity for technology, and that curiosity continues to
              drive how I build, iterate, and collaborate on software.
            </p>
          </div>
        </section>

        <section id="experience" className="mb-14">
          <p className="mb-4 font-mono text-sm text-primary">~/experience</p>
          <div className="space-y-6">
            {experienceItems.map((item) => (
              <article key={item.id} className="border-l border-slate-800 pl-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.year}</p>
                <h2 className="mt-1 text-lg font-medium text-white">{item.role}</h2>
                <p className="text-sm text-primary">{item.title} · {item.timeline}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-6">
          <p className="mb-4 font-mono text-sm text-primary">~/projects</p>
          <div className="space-y-5">
            {projects.map((project) => (
              <article key={project.id} className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base font-medium text-white">{project.brand.name}</h3>
                  <span className="text-xs uppercase tracking-[0.18em] text-slate-500">{project.year}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-4 text-sm">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="underline decoration-slate-600 underline-offset-4 transition hover:text-primary hover:decoration-primary"
                  >
                    View details
                  </Link>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-slate-600 underline-offset-4 transition hover:text-primary hover:decoration-primary"
                  >
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
