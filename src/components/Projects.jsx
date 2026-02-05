import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group h-full rounded-2xl border border-slate-600 bg-slate-700/40 p-6 transition hover:border-primary/70 hover:bg-slate-700/60"
            >
              <div
                className="h-12 w-12 rounded-xl mb-4"
                style={{ background: `linear-gradient(140deg, ${project.brand.accent}66, transparent)` }}
              />
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs uppercase tracking-[0.3em] text-slate-300">Project</span>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: project.brand.accent, color: '#0f172a' }}
                >
                  {project.brand.name}
                </span>
              </div>
              <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition">
                {project.title}
              </h4>
              <p className="text-slate-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-800/70 text-slate-100 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-sm text-slate-300 flex items-center justify-between">
                <span>{project.year}</span>
                <span className="text-primary">View details →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}