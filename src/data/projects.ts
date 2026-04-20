import tandemBlogImage from '../assets/tandem/tandem-blog.png';
import tandemLogo from '../assets/tandem/tandem-logo.png';
import tandemMock from '../assets/tandem/Tandem_Mock.png';
import tandemUpload from '../assets/tandem/upload.png';
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
            'Tandem is an AI-powered childcare scheduling app for trade parents in British Columbia who work unpredictable hours and need a better way to coordinate care around changing shifts. I contributed as a full-stack developer on an eight-person team, focusing on feature implementation, reusable component structure, and reliable data flow between frontend and backend.',
            'We built with Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, and Drizzle ORM. This stack helped us move quickly on the interface while keeping scheduling data structured, traceable, and maintainable.',
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
          title: '02. Problem & Context',
          paragraphs: [
            'Trade parents often deal with changing shifts, early starts, overtime, and last-minute updates. Childcare planning becomes difficult when work schedules and care schedules move out of sync.',
            'Most existing tools are designed for stable routines, so they struggle with childcare gaps, shared caregiving, and fast rescheduling. In practice, that leaves families coordinating through messages, calls, and memory, which quickly breaks down when plans change.',
          ],
        },
        {
          title: '03. Features & Solution',
          paragraphs: [
            'A major part of my contribution was the intake workflow that lets parents submit schedule data through PDF upload and voice input. The goal was to keep input fast for users while still producing dependable structured data.',
            'One of the biggest implementation challenges was validating extraction quality across inconsistent PDF formats without making the flow complicated. We combined PDF parsing with the Web Speech API for voice capture, then used Groq to normalize extracted text into clean JSON so records could be inserted into PostgreSQL safely and consistently.',
          ],
          bullets: [
            'Upload + extraction pipeline: Implemented the schedule upload flow and validation checks to reduce malformed data before persistence.',
            'Voice input pipeline: Integrated the Web Speech API to capture spoken schedule details as an alternative input path for busy users.',
            'Groq normalization: Converted extracted and transcribed text into clean, predictable JSON so data could be mapped into PostgreSQL with fewer edge-case failures.',
            'Nanny booking: We built a booking flow where parents can review caregiver availability, submit requests, and track booking status without losing context.',
            'Nanny sharing: We supported shared caregiver coordination so multiple families could plan around the same nanny arrangement with less manual back-and-forth.',
            'Shared visibility: We kept work shifts and childcare schedules connected in one place so household updates remained transparent and easier to manage.',
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
          title: '04. Research & Team Process',
          paragraphs: [
            'We used interviews and surveys to understand how parents actually handle unpredictable schedules. A key takeaway was that the hardest part is not only finding childcare, but keeping plans aligned when work changes quickly.',
            'Designers and developers used those findings together to shape the product direction. It led us to prioritize flexible scheduling logic, clearer status changes, and flows that could be updated without forcing users to restart each step.',
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
              caption: 'User personas used to align feature priorities with real parent needs.',
              linkUrl:
                'https://www.figma.com/design/YszzNjMmTCjwBzJa5VBpNL/Tandem-App-Project?node-id=11023-21011&t=TRzCNkPmJS5u7xAs-0',
              linkLabel: 'Open Personas in Figma',
            },
            {
              src: tandemUserFlow,
              alt: 'Tandem user flow diagram from research analysis',
              caption: 'User flow map used to validate scheduling and coordination interactions.',
              linkUrl:
                'https://www.figma.com/design/YszzNjMmTCjwBzJa5VBpNL/Tandem-App-Project?node-id=11060-22776&t=h6eg8eUr56aQpeAi-0',
              linkLabel: 'Open User Flow in Figma',
            },
          ],
        },
        {
          title: '05. Wireframes & Design Planning',
          paragraphs: [
            'Before implementation, we used wireframes to map the core journey from schedule input to shared childcare coordination. This made the flow easier to explain, test, and align across design and development.',
            'The wireframes show how key product decisions were made early, including reducing friction in scheduling steps, clarifying shared responsibilities, and preserving visibility for all household members.',
          ],
          embed: {
            src: 'https://embed.figma.com/design/YszzNjMmTCjwBzJa5VBpNL/Tandem-App-Project?node-id=7635-13393&embed-host=share',
            title: 'Tandem wireframes in Figma',
            caption:
              'Wireframe exploration used to validate navigation, information hierarchy, and scheduling interactions before final UI implementation.',
            linkUrl:
              'https://www.figma.com/design/YszzNjMmTCjwBzJa5VBpNL/Tandem-App-Project?node-id=7635-13393',
            linkLabel: 'Open Wireframes in Figma',
          },
          images: [
            {
              src: tandemStyleGuide,
              alt: 'Tandem style guide for visual consistency and component standards',
              caption:
                'Style guide used during planning and implementation to keep typography, spacing, and components consistent.',
              linkUrl:
                'https://www.figma.com/design/YszzNjMmTCjwBzJa5VBpNL/Tandem-App-Project?node-id=11006-20590&t=qmkMnwELrzISRSVm-0',
              linkLabel: 'Open Style Guide in Figma',
            },
          ],
        },
        {
          title: '06. Engineering Challenges',
          paragraphs: [
            'The hardest technical challenge was handling unpredictable scheduling logic without letting the codebase become difficult to maintain. I kept components focused and reused state intentionally instead of centralizing everything into one large form.',
            'A key trade-off was simplicity versus scalability. I prioritized a straightforward implementation that stayed clear for users and teammates, while still structuring the scheduling flow so it could grow later without a full rewrite.',
          ],
          bullets: [
            'Managing state across scheduling and booking steps so updates stayed predictable.',
            'Keeping work and childcare data in sync when multiple users depended on the same information.',
            'Making the interface responsive without breaking the logic behind it.',
            'Fixing edge cases where schedule updates could leave the UI in an inconsistent state.',
          ],
        },
        {
          title: '07. Project Communication',
          paragraphs: [
            'Even though I was focused on development, I also considered how the project would be presented. The blog, demo, and project summary needed to explain the app clearly, so I made sure implemented features were understandable and matched what users actually saw.',
            'That influenced implementation decisions too. If a feature was hard to demo or explain, it usually signaled that the logic or flow needed to be simplified. Keeping the product understandable helped both team communication and long-term maintainability.',
          ],
        },
        {
          title: '08. Reflection',
          paragraphs: [
            'This project reinforced that strong full-stack work is not only about shipping features, but about keeping them understandable and maintainable in a collaborative team environment. Working closely with designers helped me translate UX concepts into component architecture and state logic.',
            'With more time, I would strengthen scheduling validation, improve conflict detection, and expand edge-case handling around childcare changes. Even so, Tandem was a valuable learning experience in building around a real user problem with practical product constraints.',
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
