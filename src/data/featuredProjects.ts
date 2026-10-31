import { showcaseImages } from '../lib/projectImages';

// Editorial order is independent of project dates and detail-page narratives.
export const featuredProjects = [
  {
    slug: 'VibePlay',
    type: 'Personal project',
    description: 'A personal full-stack application for building Spotify playlists around moods, genres, artists, and musical preferences. My focus: playlist selection, authentication reliability, and thoughtful error handling.',
    technologies: ['Next.js', 'TypeScript', 'Spotify Web API'],
    image: showcaseImages.vibeplay,
    alt: 'VibePlay development landing page with mood-led playlist creation and record artwork',
    caption: 'Development preview · Local build',
  },
  {
    slug: 'tandem',
    type: 'BCIT capstone',
    description: 'Childcare coordination for parents in skilled trades with changing work schedules. On a team of three developers and five designers, I built backend processing that turns voice and PDF inputs into structured scheduling data.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    image: showcaseImages.tandem,
    alt: 'Tandem schedule upload screen showing a PDF upload and voice input option',
    caption: 'Schedule intake · Project screenshot',
  },
  {
    slug: 'InsurFlow',
    type: 'Professional experience',
    description: 'An InsurTech SaaS platform that moves insurance advisors’ financial needs analysis and documentation beyond spreadsheets. At Vero Ventures, I contributed to architecture and core features with a five-person engineering team.',
    technologies: ['Next.js', 'TypeScript', 'Drizzle ORM'],
    image: showcaseImages.insurflow,
    alt: 'InsurFlow household intake screen with an active insurance scenario and estimate preview',
    caption: 'Household intake · Project screenshot',
  },
];
