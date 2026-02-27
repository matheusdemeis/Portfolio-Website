import { Link } from 'react-router-dom';

export default function ProjectsCompact({ projects }) {
  const sorted = [...projects].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <div className="space-y-8">
      {sorted.map((project) => (
        <article
          key={project.id}
          className="grid gap-4 border-t border-slate-800 pt-5 md:grid-cols-[96px_1fr_auto] md:gap-6"
        >
          <p className="text-sm tracking-[0.12em] text-stone-500">{project.year}</p>
          <div>
            <h3 className="text-lg font-medium text-white">{project.brand.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-300">{project.description}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.12em] text-stone-500">
              Tech: {project.tags.slice(0, 4).join(' · ')}
            </p>
          </div>
          <div className="flex gap-2 text-sm md:justify-end md:self-start">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-slate-700 px-3 py-1.5 text-stone-300 transition hover:border-primary hover:text-primary"
              >
                Live
              </a>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-700 px-3 py-1.5 text-stone-300 transition hover:border-primary hover:text-primary"
            >
              GitHub
            </a>
            <Link
              to={`/projects/${project.slug}`}
              className="rounded-md border border-slate-700 px-3 py-1.5 text-stone-300 transition hover:border-primary hover:text-primary"
            >
              Details
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
