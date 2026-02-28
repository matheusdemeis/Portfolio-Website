import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = useMemo(() => projects.find((item) => item.slug === slug), [slug]);

  if (!project) {
    return (
      <div className="pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Project not found</h2>
          <p className="text-slate-300 mb-8">Try heading back to the projects list.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition"
          >
            <ArrowLeft size={18} /> Back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="overflow-x-clip bg-slate-800/50 px-4 pb-20 pt-24 sm:px-6 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8"
        >
          <ArrowLeft size={18} /> Back
        </Link>

        <header className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-300">Project</span>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: project.brand.accent, color: '#0f172a' }}
              >
                {project.brand.name}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">{project.title}</h2>
            <p className="text-slate-300 max-w-2xl">{project.description}</p>
          </div>
          <div className="grid w-full grid-cols-1 gap-3 text-sm text-slate-200 sm:grid-cols-2 lg:max-w-xl">
            <div className="min-w-0 rounded-lg bg-slate-900/50 p-4">
              <p className="text-slate-400">Role</p>
              <p className="break-words font-semibold">{project.role}</p>
            </div>
            <div className="min-w-0 rounded-lg bg-slate-900/50 p-4">
              <p className="text-slate-400">Timeline</p>
              <p className="font-semibold">{project.timeline}</p>
            </div>
            <div className="min-w-0 rounded-lg bg-slate-900/50 p-4">
              <p className="text-slate-400">Year</p>
              <p className="font-semibold">{project.year}</p>
            </div>
            <div className="min-w-0 rounded-lg bg-slate-900/50 p-4">
              <p className="text-slate-400">Brand tone</p>
              <p className="break-words font-semibold">{project.brand.tone}</p>
            </div>
          </div>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="min-w-0">
            <h3 className="text-2xl font-semibold mb-4">Rationale</h3>
            <ul className="space-y-3 text-slate-300">
              {project.rationale.map((item, index) => (
                <li key={`${item}-${index}`} className="flex min-w-0 gap-3">
                  <span
                    className="mt-2 h-2 w-2 rounded-full"
                    style={{ backgroundColor: project.brand.accent }}
                  />
                  <span className="break-words">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="max-w-full break-words rounded-full bg-slate-900/60 px-3 py-1 text-sm text-slate-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.blog && (
              <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5 mt-8">
                <div className="relative mb-4 flex w-full aspect-[16/9] items-end overflow-hidden rounded-xl bg-slate-950/70 p-4 sm:aspect-[16/6]">
                  {project.blog.image && (
                    <img
                      src={project.blog.image}
                      alt={project.blog.title}
                      className="absolute inset-0 z-0 w-full h-full object-contain object-center"
                    />
                  )}
                  <div
                    className="absolute inset-0 z-10"
                    style={{
                      background: project.blog.image
                        ? 'linear-gradient(to top, rgba(15, 23, 42, 0.84) 5%, rgba(15, 23, 42, 0.2) 50%, rgba(15, 23, 42, 0.1) 100%)'
                        : `linear-gradient(135deg, ${project.brand.accent}66, transparent)`
                    }}
                  />
                  <div className="relative z-20">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Featured</p>
                    <p className="text-2xl font-semibold">{project.blog.title}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-4">{project.blog.description}</p>
                <div className="flex flex-wrap items-center gap-6">
                  <a
                    href={project.blog.url}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition"
                  >
                    Visit Blog <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition"
                  >
                    GitHub Repository <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            )}

            {!project.blog && (
              <div className="mt-8">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition"
                >
                  GitHub Repository <ExternalLink size={16} />
                </a>
              </div>
            )}
          </div>

          <div className="min-w-0">
            {project.demoUrl ? (
              <>
                <h3 className="text-2xl font-semibold mb-4">Live Demo</h3>
                <div className="mx-auto flex justify-center">
                  <div
                    className="w-full max-w-[402px] overflow-hidden rounded-[2rem] border-[10px] border-gray-800 bg-gray-800 shadow-2xl sm:rounded-[2.5rem] sm:border-[14px]"
                    style={{ aspectRatio: '402 / 874' }}
                  >
                    <iframe
                      src={project.demoUrl}
                      className="h-full w-full"
                      title={`${project.brand.name} App`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    />
                  </div>
                </div>
              </>
            ) : project.visuals?.length ? (
              <>
                <h3 className="text-2xl font-semibold mb-4">Project Highlights</h3>
                <div className="grid gap-4">
                  {project.visuals.map((visual, index) => (
                    <div
                      key={`${visual.title}-${index}`}
                      className="rounded-xl border border-slate-700 bg-slate-900/60 p-4"
                    >
                      <div
                        className="h-16 rounded-lg mb-4"
                        style={{
                          background: `linear-gradient(120deg, ${project.brand.accent}33, transparent)`
                        }}
                      />
                      <p className="font-semibold mb-1">{visual.title}</p>
                      <p className="text-slate-300 text-sm">{visual.description}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </div>

      </div>
    </section>
  );
}
