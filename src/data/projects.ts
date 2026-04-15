import tandemBlogImage from '../assets/tandem/tandem-blog.png';
import tandemLogo from '../assets/tandem/tandem-logo.png';
import tandemMock from '../assets/tandem/Tandem_Mock.png';
import tandemUserFlow from '../assets/tandem/tandem_userflow.jpg';
import tandemUserPersonas from '../assets/tandem/tandem_userpersonas.png';
import tandemStyleGuide from '../assets/tandem/tandem_styleguide.png';
import insurflowLogo from '../assets/insurflow/insurflow.png';
import insurflowImage1 from '../assets/insurflow/insurflow1.png';
import insurflowImage2 from '../assets/insurflow/insurflow2.png';
import insurflowImage3 from '../assets/insurflow/insurflow3.png';
import sudokuImage from '../assets/sudoku/sudoku.png';
import vibeplayImage1 from '../assets/vibeplay/vibeplay.png';
import vibeplayImage2 from '../assets/vibeplay/vibeplay2.png';
import vibeplayImage3 from '../assets/vibeplay/vibeplay3.png';
import bookstoreImage1 from '../assets/bookstore/bookstore1.png';
import bookstoreImage2 from '../assets/bookstore/bookstore2.png';
import bookstoreImage3 from '../assets/bookstore/bookstore3.png';
import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 2,
    slug: 'tandem',
    demoUrl: 'https://tandem-app.com/',
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
            'Tandem is an AI-powered childcare scheduling app for trade parents in British Columbia who work unpredictable hours and need a better way to coordinate childcare around changing shifts. I worked on the project as a full-stack developer in a team of eight, and my main contribution was implementing features, structuring reusable components, and connecting the UI to the data flow behind the product.',
            'The stack used Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, and Drizzle ORM. That setup let us build a modern frontend while still keeping the scheduling data organized and easy to work with.',
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
            'Trade parents often deal with changing shifts, early starts, overtime, and last-minute schedule changes. That makes childcare planning harder than it sounds, because work schedules and care schedules do not always line up.',
            'Most existing tools are built for more stable routines, so they do not handle childcare gaps, shared caregiving, or quick rescheduling very well. That usually leaves parents coordinating through messages, calls, and memory, which is stressful and easy to break when plans change.',
          ],
        },
        {
          title: '03. Key Features',
          paragraphs: [
            'As a team, we focused on making the product practical for real day-to-day use, balancing scheduling logic, booking workflows, and shared visibility in one experience.',
          ],
          bullets: [
            'AI scheduling: I fully implemented the AI scheduling pipeline using Groq to parse raw inputs from PDF schedules and voice input into clean JSON, then mapped that structured data into our database so schedules could be surfaced clearly on the homepage.',
            'Nanny booking: We built a booking flow where parents can review caregiver availability, submit requests, and track booking status without losing context.',
            'Nanny sharing: We:supported shared caregiver coordination so multiple families could plan around the same nanny arrangement with less manual back-and-forth.',
            'Shared visibility: We kept work shifts and childcare schedules connected in one place so household updates remained transparent and easier to manage.',
          ],
        },
        {
          title: '04. Research & Analysis',
          paragraphs: [
            'The team used interviews and surveys to understand how parents actually manage unpredictable schedules. One of the biggest takeaways was that the problem was not just finding childcare, but keeping everything aligned when plans change quickly.',
            'That influenced development decisions pretty directly. It pushed us to prioritize flexible scheduling logic, clearer state changes, and a flow that could update without making users start over every time work changed.',
          ],
          bullets: [
            'Keep the scheduling flow short enough to use quickly on a busy day.',
            'Make conflicts easier to spot before they become a problem.',
            'Support shared planning without making the UI feel crowded.',
          ],
          images: [
            {
              src: tandemUserPersonas,
              alt: 'Tandem user personas used to guide product and flow decisions',
              caption: 'User personas from early research',
              linkUrl:
                'https://www.figma.com/design/YszzNjMmTCjwBzJa5VBpNL/Tandem-App-Project?node-id=11023-21011&t=TRzCNkPmJS5u7xAs-0',
              linkLabel: 'Open Personas in Figma',
            },
            {
              src: tandemUserFlow,
              alt: 'Tandem user flow diagram from research analysis',
              caption: 'User flow used to validate scheduling interactions',
              linkUrl:
                'https://www.figma.com/design/YszzNjMmTCjwBzJa5VBpNL/Tandem-App-Project?node-id=11060-22776&t=h6eg8eUr56aQpeAi-0',
              linkLabel: 'Open User Flow in Figma',
            },
          ],
        },
        {
          title: '05. Code Rationale & Challenges',
          paragraphs: [
            'The hardest part on the development side was handling unpredictable scheduling logic without making the code messy. I tried to keep components focused and reuse state where it made sense, instead of packing everything into one large form or page. That made the app easier to maintain and easier for the rest of the team to build on.',
            'A big trade-off was simplicity versus scalability. I leaned toward a straightforward implementation first because the product needed to stay understandable for users and for the team, but I still structured the code so the scheduling flow could grow later without a full rewrite.',
          ],
          bullets: [
            'Managing state across scheduling and booking steps so updates stayed predictable.',
            'Keeping work and childcare data in sync when multiple users depended on the same information.',
            'Making the interface responsive without breaking the logic behind it.',
            'Fixing edge cases where schedule updates could leave the UI in an inconsistent state.',
          ],
          images: [
            {
              src: tandemStyleGuide,
              alt: 'Tandem style guide for visual consistency and component standards',
              caption: 'Style guide reference used during implementation',
              linkUrl:
                'https://www.figma.com/design/YszzNjMmTCjwBzJa5VBpNL/Tandem-App-Project?node-id=11006-20590&t=qmkMnwELrzISRSVm-0',
              linkLabel: 'Open Style Guide in Figma',
            },
          ],
        },
        {
          title: '06. Marketing',
          paragraphs: [
            'Even though I was focused on development, I still had to think about how the project would be presented. The blog, demo, and project summary all needed to describe the app clearly, so I made sure the features we built were easy to explain and matched what users would actually see in the product.',
            'That also affected implementation. If a feature was hard to demo or hard to explain, it usually meant the logic or flow needed to be simplified. Keeping the product understandable made it easier for the team to present the project and easier for me to maintain the code behind it.',
          ],
        },
        {
          title: '07. Reflection',
          paragraphs: [
            'This project taught me that good full-stack work is not just about making features work, but about making them easy to understand and maintain when a team is building together. Working with designers helped me translate UX ideas into actual components and state logic, and working with other developers pushed me to keep the code clean and practical.',
            'If I had more time, I would tighten the scheduling validation, improve conflict detection, and add more edge-case handling around childcare changes. Even so, Tandem was a strong learning experience because it showed me how to build around a real-world problem and keep the product grounded in actual user needs.',
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
    images: [insurflowImage1, insurflowImage2, insurflowImage3],
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
  {
    id: 4,
    slug: 'bookstore',
    logo: '',
    images: [bookstoreImage1, bookstoreImage2, bookstoreImage3],
    title: 'Bookstore Web Application',
    description:
      'A full-stack bookstore web app where users can browse and sort books, view details, add items to a cart, place orders, and review order history with data persisted in Azure SQL.',
    tags: [
      'ASP.NET Core',
      'C#',
      'Entity Framework Core',
      'Azure App Service',
      'Azure SQL Database',
      'Bootstrap',
      'MVC',
      'CRUD',
    ],

    link: 'https://github.com/matheusdemeis/bookstore-app',
    liveUrl: 'https://bookstore-app-gjdgbyagbqcmgcds.canadacentral-01.azurewebsites.net/myorders',

    brand: {
      name: 'Bookstore',
      tone: 'Cloud-connected full-stack bookstore focused on practical e-commerce flow and clean CRUD architecture',
      accent: '#22C55E',
    },

    timeline: 'Academic assignment',
    role: 'Full Stack Developer',
    year: '2026',

    rationale: [
      'I built this project to practice a complete e-commerce flow, from catalog browsing to order creation, using real backend logic and database persistence instead of hardcoded data.',
      'Key features include a searchable visual catalog flow with sorting by price, detailed book pages, cart interactions, order placement, and order history with timestamps, quantities, and totals.',
      'On the backend, I modeled Books, Orders, and OrderItems with Entity Framework Core so order creation and history retrieval could be handled cleanly through relational data instead of manual data wiring.',
      'I deployed the app to Azure App Service and connected it to Azure SQL Database, which gave me hands-on experience with cloud deployment, connection management, and full-stack data flow in production-like conditions.',
      'This project strengthened how I design MVC-based features with separation of concerns, and taught me to think more carefully about state management, database relationships, and maintainable backend structure.',
    ],

    visuals: [],
  },
  {
    id: 5,
    slug: 'sukodu',
    logo: '',
    images: [sudokuImage],
    title: 'Sukodu',
    description:
      'A polished Sudoku web game focused on clean UI, responsive design, and smooth gameplay across desktop and mobile.',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Game Development',
      'Responsive Design',
      'UI/UX',
      'Frontend Architecture',
      'Interactive State Management',
    ],
    link: 'https://github.com/matheusdemeis/Sudoku',
    liveUrl: 'https://sudoku-sigma-two.vercel.app/',
    brand: {
      name: 'Sukodu',
      tone: 'Modern, focused, and playful Sudoku experience with polished interaction design.',
      accent: '#F59E0B',
    },
    timeline: '2026',
    role: 'Full Stack Developer',
    year: '2026',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    rationale: [
      'Built to turn classic 9x9 Sudoku gameplay into a refined browser experience with modern UI patterns.',
      'Designed to work smoothly on both desktop and mobile with a responsive board and touch-friendly controls.',
      'Implemented practical gameplay systems like difficulty selection, timer tracking, and notes mode for pencil entries.',
      'Focused on interaction polish with board highlighting, validation feedback, and mistake checking to keep play engaging.',
    ],
    visuals: [],
  },
];
