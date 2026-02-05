import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const cards = Array.from(
        sectionRef.current?.querySelectorAll('[data-project-card]') || []
      );

      if (!cards.length) return;

      gsap.set(cards, { opacity: 0, y: 24 });

      ScrollTrigger.batch(cards, {
        start: 'top 85%',
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.12
          }),
        once: true
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              data-project-card
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