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
            to="/projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition"
          >
            <ArrowLeft size={18} /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="pt-28 pb-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8"
        >
          <ArrowLeft size={18} /> Back to Projects
        </Link>

        <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
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
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-200">
            <div className="bg-slate-900/50 rounded-lg p-4">
              <p className="text-slate-400">Role</p>
              <p className="font-semibold">{project.role}</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <p className="text-slate-400">Timeline</p>
              <p className="font-semibold">{project.timeline}</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <p className="text-slate-400">Year</p>
              <p className="font-semibold">{project.year}</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <p className="text-slate-400">Brand tone</p>
              <p className="font-semibold">{project.brand.tone}</p>
            </div>
          </div>
        </header>

        <div className="mt-10 grid lg:grid-cols-[1.2fr_1fr] gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Rationale</h3>
            <ul className="space-y-3 text-slate-300">
              {project.rationale.map((item, index) => (
                <li key={`${item}-${index}`} className="flex gap-3">
                  <span
                    className="mt-2 h-2 w-2 rounded-full"
                    style={{ backgroundColor: project.brand.accent }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-900/60 text-slate-100 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.blog && (
              <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5 mt-8">
                <div className="h-52 md:h-64 rounded-xl mb-4 flex items-end p-4 overflow-hidden relative">
                  {project.blog.image && (
                    <img
                      src={project.blog.image}
                      alt={project.blog.title}
                      className="absolute inset-0 w-full h-full object-contain object-top"
                    />
                  )}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: project.blog.image
                        ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.9))'
                        : `linear-gradient(135deg, ${project.brand.accent}66, transparent)`
                    }}
                  />
                  <div className="relative z-10">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Featured</p>
                    <p className="text-2xl font-semibold">{project.blog.title}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-4">{project.blog.description}</p>
                <a
                  href={project.blog.url}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition"
                >
                  Visit Blog <ExternalLink size={16} />
                </a>
              </div>
            )}
          </div>

          <div>
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
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-end gap-4">
          <a
            href={project.link}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition"
          >
            View Project <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
