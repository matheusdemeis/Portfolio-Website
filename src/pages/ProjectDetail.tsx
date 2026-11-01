import { useParams } from 'react-router-dom';
import VibePlayCaseStudy from '../components/VibePlayCaseStudy';
import TandemCaseStudy from '../components/TandemCaseStudy';
import InsurFlowCaseStudy from '../components/InsurFlowCaseStudy';
import { projects } from '../data/projects';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(item => item.slug === slug);
  if (!project) return <NotFound />;
  switch (project.slug) {
    case 'VibePlay': return <VibePlayCaseStudy project={project} />;
    case 'tandem': return <TandemCaseStudy project={project} />;
    case 'InsurFlow': return <InsurFlowCaseStudy project={project} />;
    default: return <NotFound />;
  }
}
