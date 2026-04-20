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

export interface ProjectCaseStudySection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  embed?: {
    src: string;
    title: string;
    caption?: string;
    linkUrl?: string;
    linkLabel?: string;
  };
  images?: {
    src: string;
    alt: string;
    caption?: string;
    linkUrl?: string;
    linkLabel?: string;
  }[];
  featureVisuals?: {
    title: string;
    description: string;
    image: string;
    alt: string;
  }[];
}

export interface ProjectCaseStudy {
  sections: ProjectCaseStudySection[];
  demoCaption?: string;
  demoCallouts?: string[];
}

export interface Project {
  id: number;
  slug: string;
  demoUrl?: string;
  liveUrl?: string;
  logo: string;
  images?: string[];
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
