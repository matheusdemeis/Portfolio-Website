import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredProjects } from '../data/featuredProjects';
import type { Project } from '../types';
import ProjectMedia from './ProjectMedia';

export default function ProjectsCompact({ projects }: { projects: Project[] }) {
  return (
    <div className="project-grid">
      {featuredProjects.map((feature, index) => {
        const project = projects.find(item => item.slug === feature.slug);
        if (!project) return null;
        return (
          <article key={project.id} className={`project-card ${index === 0 ? 'project-featured' : ''}`} aria-labelledby={`project-${project.slug}`}>
            <ProjectMedia src={feature.image} alt={feature.alt} caption={feature.caption} featured={index === 0} />
            <div className="project-content">
              <div className="project-identity">
                <p className="eyebrow">{feature.type} <span aria-hidden="true">/</span> {project.year}</p>
                <h3 id={`project-${project.slug}`}>{project.brand.name}</h3>
                <ul className="project-tech" aria-label={`${project.brand.name} technologies`}>
                  {feature.technologies.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
              </div>
              <div className="project-summary">
                <p>{feature.description}</p>
                <div className="project-actions">
                  <Link to={`/projects/${project.slug}`} className="text-action project-detail-link" aria-label={`${project.caseStudy ? 'View case study' : 'View project'}: ${project.brand.name}`}>
                    {project.caseStudy ? 'View Case Study' : 'View Project'} <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-action" aria-label={`Visit ${project.brand.name} website`}>Visit Site <ArrowUpRight size={15} aria-hidden="true" /></a>}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-action" aria-label={`${project.brand.name} on GitHub`}>GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
