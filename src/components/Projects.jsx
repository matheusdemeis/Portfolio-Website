import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-center">Featured Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-slate-700/50 border border-slate-600 rounded-lg p-6 hover:border-cyan-500 transition hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <h4 className="text-xl font-bold mb-3">{project.title}</h4>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-slate-600 text-cyan-300 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
              >
                View Project <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}