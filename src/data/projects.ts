import tandemBlogImage from '../assets/tandem/tandem-blog.png';
import tandemLogo from '../assets/tandem/tandem-logo.png';
import insurflowLogo from '../assets/insurflow/insurflow.png';
import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 2,
    slug: 'tandem',
    demoUrl: 'https://tandem-app.com/',
    logo: tandemLogo,
    title: 'Tandem, bridging the gap between work and childcare',
    description:
      'Tandem is a collaborative scheduling platform that helps busy families and shift workers manage work hours, coordinate childcare, and reduce scheduling conflicts through shared, real-time planning tools.',
    tags: [
      'Next.js',
      'TypeScript',
      'React',
      'PostgreSQL',
      'Drizzle ORM',
      'Real-Time Data',
      'Agile Development',
      'Team Collaboration',
    ],
    link: 'https://github.com/IDSP-TRADECARE/Tandem',
    blog: {
      title: 'Tandem Development Blog',
      description:
        'Behind-the-scenes updates, design iterations, and technical decisions throughout the Tandem project lifecycle.',
      url: 'https://tandem-blog.vercel.app/',
      image: tandemBlogImage,
    },
    brand: {
      name: 'Tandem',
      tone: 'A collaborative productivity tool focused on simplifying scheduling for busy households.',
      accent: '#4A9B9B',
    },
    timeline: '16 weeks',
    role: 'Full Stack Developer (Team of 3 Developers + 5 Designers)',
    year: '2025',
    rationale: [
      'Designed to solve real-world scheduling conflicts experienced by shift-based workers and families.',
      'Built collaboratively with designers to create a clean, intuitive planning experience.',
      'Focused on synchronizing multiple schedule types into one unified system.',
      'Demonstrates experience integrating UI with live data and scalable backend architecture.',
    ],
    visuals: [
      {
        title: 'Shared Scheduling Dashboard',
        description:
          'Central calendar view showing synchronized work, childcare, and personal events.',
      },
      {
        title: 'Event Creation Workflow',
        description:
          'Multi-input scheduling interface supporting manual entry, voice input, and document upload.',
      },
      {
        title: 'Real-Time Collaboration',
        description:
          'Live updates across users ensuring schedules remain synchronized.',
      },
    ],
  },
  {
    id: 1,
    slug: 'InsurFlow',
    logo: insurflowLogo,
    title: 'InsurFlow, AI-Enabled InsurTech SaaS',
    description:
      'A full-stack SaaS platform designed to help life insurance advisors perform Financial Needs Analysis, automate compliance documentation, and replace legacy spreadsheet workflows.',
    tags: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Drizzle ORM',
      'SaaS Architecture',
      'DevOps',
      'Product Development',
      'FinTech',
    ],
    link: 'https://github.com/Vero-Ventures/insurflow',
    liveUrl: 'https://insurflow.biz/',
    brand: {
      name: 'InsurFlow',
      tone: 'Modern, professional, data-driven InsurTech platform focused on advisor productivity',
      accent: '#38BDF8',
    },
    timeline: '16 weeks',
    role: 'Full stack web developer',
    year: '2026',
    rationale: [
      'Built as a greenfield InsurTech SaaS to modernize legacy spreadsheet-based financial analysis workflows used by life insurance advisors.',
      'Focused on designing a scalable, configurable platform capable of supporting advisors globally while maintaining strong UX and performance.',
      'Emphasized real-world product development practices including customer discovery, market validation, and agile iteration.',
      'Demonstrated the ability to architect complex financial modeling logic while maintaining clean, modern infrastructure.',
    ],
    visuals: [],
  },
  {
    id: 3,
    slug: 'VibePlay',
    logo: '',
    title: 'VibePlay',
    description:
      'A full-stack web application that generates Spotify playlists based on moods, genres, or artists. Users authenticate with Spotify, generate curated playlists using the Spotify Web API, and save them directly to their Spotify account.',
    tags: [
      'Next.js',
      'TypeScript',
      'Spotify Web API',
      'OAuth 2.0',
      'REST APIs',
      'TailwindCSS',
      'Product Development',
      'Full-Stack Development',
    ],

    link: 'https://github.com/matheusdemeis/vibe-playlist',
    liveUrl: 'https://vibe-play-livid.vercel.app/',

    brand: {
      name: 'VibePlay',
      tone: 'Creative, modern music-discovery tool focused on personalized playlist generation',
      accent: '#1DB954',
    },

    timeline: '2026',
    role: 'Full Stack Developer',
    year: '2026',

    rationale: [
      'Built to explore the Spotify Web API and demonstrate full OAuth authentication flows with a real third-party platform.',
      'Designed a system that generates playlists dynamically based on user input such as vibe, genre, or favorite artists.',
      'Implemented playlist creation and track insertion directly into user Spotify accounts using authenticated API requests.',
      'Focused on building a clean, responsive UI while maintaining a reliable API integration flow and handling edge cases like API errors and permission scopes.',
    ],

    visuals: [],
  },
];
