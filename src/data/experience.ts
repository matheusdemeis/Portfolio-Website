import type { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    id: 'vero ventures',
    year: '2026',
    role: 'Full Stack Developer',
    title: 'Vero Ventures',
    timeline: 'January 2026 - May 2026',
    impacts: [
      'Part of a 5-person engineering team building InsurFlow, a greenfield SaaS product from scratch.',
      'Helped define the technical stack and application architecture',
      'Built and shipped core features in a production-ready environment',
      'Collaborated in code reviews and iterative product development',
      'Worked closely with senior developers to ensure scalability and clean architecture',
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM'],
  },
  {
    id: 'bcit-full-stack-web-development',
    year: '2024-2026',
    role: 'Full-Stack Web Development Diploma',
    title: 'British Columbia Institute of Technology (BCIT)',
    timeline: 'British Columbia, Canada',
    impacts: [
      'Completed a two-year, full-time diploma focused on developing, deploying, and designing modern web applications.',
      'Built full-stack applications using React, Next.js, Node.js, REST APIs, databases, and SQL.',
      'Practiced modern development workflows with TypeScript, HTML, CSS, Git, GitHub, and deployment tools.',
    ],
    tech: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'HTML/CSS',
      'SQL',
      'REST APIs',
      'Git/GitHub',
    ],
  },
];
