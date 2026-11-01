import type { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    id: 'vero ventures',
    year: '2026',
    role: 'Full-Stack Developer',
    title: 'Vero Ventures',
    timeline: 'January 2026 - May 2026 - British Columbia, Canada',
    impacts: [
      'Developed InsurFlow with a five-person engineering team at Vero Ventures, building a new SaaS platform for insurance advisors.',
      'Contributed to technical stack selection and application architecture with senior developers.',
      'Built and shipped core features in a production-ready environment.',
      'Participated in code reviews and product iterations, working with senior developers on scalability and maintainable architecture.',
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
      'Connected frontend interfaces, backend services, REST APIs, and relational databases in practical full-stack projects.',
      'Built Tandem with a team of three developers and five designers, contributing backend processing that turns voice and PDF work schedules into structured scheduling data.',
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
      'PHP',
      'C#',
      'DevOps'
    ],
  },
];
