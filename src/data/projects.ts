import tandemBlogImage from '../assets/tandem/tandem-blog.png';
import tandemLogo from '../assets/tandem/tandem-logo.png';
import insurflowLogo from '../assets/insurflow/insurflow.png';
import vibeplayImage1 from '../assets/vibeplay/vibeplay.png';
import vibeplayImage2 from '../assets/vibeplay/vibeplay2.png';
import vibeplayImage3 from '../assets/vibeplay/vibeplay3.png';
import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 2,
    slug: 'tandem',
    demoUrl: 'https://tandem-app.com/',
    logo: tandemLogo,
    title: 'Tandem: Collaborative Scheduling for Families and Shift Workers',
    description:
      'Tandem is a collaborative scheduling platform that helps busy families and shift workers coordinate work hours, childcare, and shared responsibilities in real time.',
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
    role: 'Full Stack Developer',
    team: '3 Developers + 5 Designers',
    year: '2025',
    stack: ['Next.js', 'TypeScript', 'React', 'PostgreSQL', 'Drizzle ORM', 'Real-time data'],
    rationale: [
      'Designed to solve real-world scheduling conflicts experienced by shift-based workers and families.',
      'Built collaboratively with designers to create a clean, intuitive planning experience.',
      'Focused on synchronizing multiple schedule types into one unified system.',
      'Demonstrates experience integrating UI with live data and scalable backend architecture.',
    ],
    caseStudy: {
      impact:
        'Tandem made day-to-day coordination more visible, less reactive, and easier to manage across multiple people.',
      problem:
        'Families with shift-based schedules often plan in fragments: one person tracks work hours, another tracks childcare, and updates happen across messages, memory, and last-minute calls. That lack of shared visibility creates avoidable conflicts, missed handoffs, and daily stress, especially when schedules change quickly.',
      goal: 'Build a shared scheduling experience that helps households coordinate work and childcare in one place, stay aligned in real time, and reduce scheduling confusion without adding complexity.',
      approach:
        'We treated Tandem as a cross-functional product effort from the start. Designers focused on clarity and usability, while developers translated those flows into a reliable real-time experience. Our guiding principle was simple: if multiple people depend on the same schedule, everyone should be able to understand and trust it at a glance.',
      solution: [
        'Shared schedule visibility: a unified view of work, childcare, and availability.',
        'Real-time updates: changes are reflected quickly so everyone stays in sync.',
        'Coordination-first planning: features are designed around handoffs and shared responsibilities, not just individual events.',
        'Conflict prevention: better visibility helps spot overlaps and gaps before they become problems.',
      ],
      technicalBuild: [
        'Next.js, React, and TypeScript for fast iteration and maintainable UI development.',
        'PostgreSQL with Drizzle ORM for structured, dependable scheduling data.',
        'Real-time data handling to support shared, up-to-date planning across users.',
      ],
      challenges: [
        'Keeping shared real-time schedule updates synchronized and predictable across users.',
        'Simplifying a complex multi-person coordination problem into a clean interface.',
        'Aligning implementation details with design intent in a cross-functional team.',
      ],
      outcome:
        'By the end of the project, we delivered a functional collaborative scheduling platform demonstrating core household planning workflows end to end. The project proved we could build a credible product experience around a real user problem, with thoughtful UX and solid full-stack execution.',
      learnings: [
        'Translate real-world user pain points into practical product and technical decisions.',
        'Collaborate closely with designers to preserve clarity during implementation.',
        'Balance frontend usability with backend scheduling logic and data consistency.',
        'Build features that are both technically sound and practical for everyday use.',
      ],
      demoCaption:
        'This demo shows Tandem\'s shared scheduling flow in context, highlighting how updates and responsibilities stay visible across household members.',
      demoCallouts: [
        'Unified household schedule view for work and childcare planning.',
        'Real-time schedule updates to keep everyone aligned.',
        'Shared visibility that helps catch conflicts before they escalate.',
      ],
    },
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
    images: [vibeplayImage1, vibeplayImage2, vibeplayImage3],
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
