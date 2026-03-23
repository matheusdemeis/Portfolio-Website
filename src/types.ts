export interface ProjectBrand {
  name: string;
  tone: string;
  accent: string;
}

export interface ProjectBlog {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export interface ProjectVisual {
  title: string;
  description: string;
}

export interface ProjectCaseStudy {
  impact: string;
  problem: string;
  goal: string;
  approach: string;
  solution: string[];
  technicalBuild: string[];
  challenges: string[];
  outcome: string;
  learnings: string[];
  demoCaption?: string;
  demoCallouts?: string[];
}

export interface Project {
  id: number;
  slug: string;
  demoUrl?: string;
  liveUrl?: string;
  logo: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  blog?: ProjectBlog;
  brand: ProjectBrand;
  timeline: string;
  role: string;
  team?: string;
  year: string;
  stack?: string[];
  rationale: string[];
  caseStudy?: ProjectCaseStudy;
  visuals?: ProjectVisual[];
}

export interface ExperienceItem {
  id: string;
  year: string;
  role: string;
  title: string;
  timeline: string;
  impacts: string[];
  tech: string[];
}
