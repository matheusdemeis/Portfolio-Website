import tandemBlogImage from '../assets/tandem/tandem-blog.png';
import tandemLogo from '../assets/tandem/tandem-logo.png';
import insurflowLogo from '../assets/insurflow/insurflow.png';

export const projects = [
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
    visuals: [
      {
        title: 'Client Financial Profile Dashboard',
        description:
          'Interactive dashboard displaying assets, liabilities, income replacement scenarios, and net worth projections using dynamic visualizations.',
      },
      {
        title: 'Financial Needs Analysis Workflow',
        description:
          'End-to-end workflow for capturing client data and generating automated recommendations and compliance documentation.',
      },
      {
        title: 'Advisor SaaS Platform Interface',
        description:
          'Multi-tenant advisor portal featuring authentication, client management, and configurable financial modeling tools.',
      },
    ],
  },
];
