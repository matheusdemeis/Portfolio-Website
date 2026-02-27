import { Link } from 'react-router-dom';

export default function ProjectsCompact({ projects }) {
  const sorted = [...projects].sort((a, b) => Number(b.year) - Number(a.year));
  const [featured, ...rest] = sorted;

  return (
    <div className="space-y-6">
      {featured && (
        <article className="rounded-xl border border-slate-800 bg-slate-900/55 p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-[#DF678F]">Featured</p>
          <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl font-medium text-white">{featured.brand.name}</h3>
            <span className="text-xs tracking-[0.12em] text-stone-500">{featured.year}</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-stone-300">{featured.description}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {featured.demoUrl && (
              <a
                href={featured.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-slate-700 px-3 py-1.5 text-stone-300 transition hover:border-[#DF678F] hover:text-[#DF678F]"
              >
                Live
              </a>
            )}
            <a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-700 px-3 py-1.5 text-stone-300 transition hover:border-[#DF678F] hover:text-[#DF678F]"
            >
              GitHub
            </a>
            <Link
              to={`/projects/${featured.slug}`}
              className="rounded-md border border-slate-700 px-3 py-1.5 text-stone-300 transition hover:border-[#DF678F] hover:text-[#DF678F]"
            >
              Details
            </Link>
          </div>
        </article>
      )}

      <div className="divide-y divide-slate-800 border-y border-slate-800">
        {rest.map((project) => (
          <article
            key={project.id}
            className="grid gap-3 py-4 md:grid-cols-[180px_1fr_auto] md:items-center md:gap-5"
          >
            <div>
              <h4 className="text-base font-medium text-white">{project.brand.name}</h4>
              <p className="text-xs tracking-[0.12em] text-stone-500">{project.year}</p>
            </div>
            <p className="text-sm leading-relaxed text-stone-300">{project.description}</p>
            <div className="flex gap-2 text-sm md:justify-end">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-slate-700 px-3 py-1.5 text-stone-300 transition hover:border-[#DF678F] hover:text-[#DF678F]"
                >
                  Live
                </a>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-slate-700 px-3 py-1.5 text-stone-300 transition hover:border-[#DF678F] hover:text-[#DF678F]"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
