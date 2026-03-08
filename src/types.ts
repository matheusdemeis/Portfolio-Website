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

export interface Project {
  id: number;
  slug: string;
  demoUrl?: string;
  logo: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  blog?: ProjectBlog;
  brand: ProjectBrand;
  timeline: string;
  role: string;
  year: string;
  rationale: string[];
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
