import { projectImages } from '../lib/projectImages';
import type { Project } from '../types';

const [
  tandemMock,
  tandemBlogImage,
  tandemLogo,
  tandemUpload,
] = projectImages.tandem;

const [insurflowLogo, ...insurflowImages] = projectImages.insurflow;

export const projects: Project[] = [
  {
    id: 2,
    slug: 'tandem',
    demoUrl: 'https://tandem-app.com/',
    liveUrl: 'https://www.tandem-app.com/sign-in?redirect_url=https%3A%2F%2Fwww.tandem-app.com%2F',
    logo: tandemLogo,
    title: 'Tandem: AI-Powered Childcare Scheduling for Trade Parents',
    description:
      'Tandem is an AI-powered childcare scheduling app that helps trade parents in British Columbia coordinate unpredictable work schedules, childcare coverage, nanny bookings, and shared caregivers.',
    tags: [
      'Next.js',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'PostgreSQL',
      'Drizzle ORM',
      'AI Scheduling',
      'Agile Development',
      'Team Collaboration',
    ],
    link: 'https://github.com/matheusdemeis/Tandem',
    blog: {
      title: 'Tandem Development Blog',
      description:
        'Behind-the-scenes updates, design iterations, and technical decisions throughout the Tandem project lifecycle.',
      url: 'https://tandem-blog.vercel.app/',
      image: tandemBlogImage,
    },
    brand: {
      name: 'Tandem',
      tone: 'A practical childcare coordination app for trade parents with changing schedules.',
      accent: '#4A9B9B',
    },
    timeline: '16 weeks',
    role: 'Full Stack Developer',
    team: '3 Developers + 5 Designers',
    year: '2025',
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'PostgreSQL', 'Drizzle ORM', 'AI Scheduling'],
    rationale: [
      'Built around a real scheduling problem for trade parents who need childcare to adapt to changing work hours.',
      'Translated team research into a product flow that could handle planning, booking, and shared caregiving in one place.',
      'Focused on keeping the interface understandable while supporting more complex scheduling logic underneath.',
      'Shows my experience working across frontend structure, component logic, and data-driven product features.',
    ],
    caseStudy: {
      sections: [
        {
          title: '01. Project Overview',
          paragraphs: [
            'Tandem is a childcare scheduling app for trade parents in British Columbia who need care plans that can adapt to changing shifts, early starts, overtime, and last-minute updates.',
            'I worked as a full-stack developer on an eight-person team, contributing to feature implementation, reusable component structure, and reliable data flow between the interface and database-backed scheduling records.',
          ],
          images: [
            {
              src: tandemMock,
              alt: 'Tandem app dashboard preview showing shared childcare scheduling',
              caption: 'Tandem interface preview',
            },
          ],
        },
        {
          title: '02. Problem Statement',
          paragraphs: [
            'Childcare planning becomes fragile when work schedules change faster than family routines can keep up. Parents often have to compare shift details, caregiver availability, booking status, and household responsibilities across separate conversations.',
            'The product needed to reduce that coordination burden without making the scheduling flow feel heavy. The core challenge was turning messy real-world schedule inputs into clear, shared planning data.',
          ],
        },
        {
          title: '03. Key Features',
          paragraphs: [
            'The strongest parts of the product focus on fast schedule intake, shared visibility, and booking support. I contributed to the flow that lets parents submit schedule details through PDF upload and voice input, then review structured results before they affect the household schedule.',
          ],
          bullets: [
            'Schedule upload flow for importing shift details from PDF files.',
            'Voice input support for quick schedule capture when typing is inconvenient.',
            'AI-assisted normalization that converts extracted text into predictable JSON.',
            'Shared schedule visibility for work shifts, childcare coverage, and household updates.',
            'Nanny booking and shared-care coordination for families planning around the same caregiver.',
          ],
          images: [
            {
              src: tandemUpload,
              alt: 'Tandem upload screen for schedule PDF and voice input',
              caption: 'Upload screen built for schedule intake with PDF parsing and voice input support.',
            },
          ],
        },
        {
          title: '04. Tech Stack',
          paragraphs: [
            'We built Tandem with Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, and Drizzle ORM. The stack gave us a strong balance between fast interface development and structured backend data modeling.',
            'For schedule intake, we combined PDF parsing, browser speech capture, and Groq-powered text normalization. That allowed the app to support flexible input methods while still saving schedule data in a consistent relational format.',
          ],
          bullets: [
            'Frontend: Next.js, React, TypeScript, Tailwind CSS.',
            'Database layer: PostgreSQL with Drizzle ORM.',
            'Input processing: PDF parsing, Web Speech API, and Groq text normalization.',
            'Product workflow: Agile collaboration across development and design.',
          ],
        },
        {
          title: '05. Code Rationale',
          paragraphs: [
            'I kept the scheduling flow split into focused UI pieces instead of building one large form. That made the work easier to test, review, and adjust as the product direction changed.',
            'The upload and voice-input paths both needed to produce dependable structured data, so the implementation emphasized validation before persistence. Keeping that boundary clear helped reduce malformed records and made the database layer easier to reason about.',
          ],
          bullets: [
            'Reusable components kept scheduling screens consistent across related flows.',
            'Typed data shapes reduced ambiguity between extracted schedule content and saved records.',
            'Validation happened before database writes so the UI could catch problems while users still had context.',
            'Drizzle ORM kept relational schedule data explicit without adding unnecessary backend complexity.',
          ],
        },
        {
          title: '06. Challenges',
          paragraphs: [
            'The hardest part was supporting unpredictable schedules while keeping the user experience calm. Schedule PDFs are not consistent, spoken input can be imprecise, and childcare changes often affect multiple people at once.',
            'I focused on making state changes predictable and keeping the review step visible before new schedule data was saved. That gave users a clearer way to catch mistakes and gave the team a cleaner path for future conflict detection.',
          ],
          bullets: [
            'Handling inconsistent PDF formats without making the upload flow feel technical.',
            'Keeping work shifts, childcare coverage, and bookings understandable in one shared view.',
            'Managing state across multi-step scheduling and booking interactions.',
            'Balancing a simple MVP with a data model that could support stronger conflict detection later.',
          ],
        },
        {
          title: '07. Reflection',
          paragraphs: [
            'Tandem was a valuable full-stack project because it required practical product judgment, not just feature delivery. Working closely with designers helped me translate research and UX decisions into component structure, state logic, and database-backed flows.',
            'The next improvements I would prioritize are stronger schedule validation, clearer conflict alerts, and more robust edge-case handling around last-minute childcare changes.',
          ],
        },
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
    images: [...insurflowImages],
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
    link: 'https://github.com/matheusdemeis/insurflow',
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
    images: [...projectImages.vibeplay],
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
