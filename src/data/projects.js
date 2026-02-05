import tandemBlogImage from '../assets/tandem/tandem-blog.png';

export const projects = [
    {
      id: 3,
      slug: 'tandem',
      title: 'Tandem',
      description: 'Tandem is a scheduling app that helps tradeworkers manage busy work hours, coordinate childcare, and stay organized throughout the week.',
      tags: ['Typescript', 'Next.js', 'React', 'Tailwind CSS', 'Agile Methodology'],
      link: 'https://github.com/IDSP-TRADECARE/Tandem',
      blog: {
        title: 'Tandem Blog',
        description: 'Behind-the-scenes stories, visuals, and updates from the Tandem project.',
        url: 'https://tandem-blog.vercel.app/',
        image: tandemBlogImage
      },
      brand: {
        name: 'Tandem',
        tone: 'Bridging the gap between work and childcare.',
        accent: '#4A9B9B'
      },
      timeline: '16 weeks',
      role: 'Full stack web developer',
      year: '2025',
      rationale: [
        'Worked in a team of three devs and five designers.',
        'Connected the UI to real-time data so work, childcare, and personal blocks stay in sync.',
        'Implemented uploading systems with voice, manual and document input.'
      ],
      visuals: [
        {
          title: '-----------',
          description: '-----------',
        },
        {
          title: '-----------',
          description: '-----------',
        },
        {
          title: '-----------',
          description: '-----------',
        }
      ]
    },
    {
      id: 2,
      slug: 'marketplace-app',
      title: 'Marketplace App',
      description: 'A marketplace app connecting buyers and sellers with real-time chat functionality.',
      tags: ['Typescript', 'SASS', 'Firebase', 'Prisma'],
      link: 'https://github.com/IDSP-LendItOut/LendItOut',
      brand: {
        name: 'LendItOut',
        tone: 'Community-driven marketplace',
        accent: '#38BDF8'
      },
      timeline: '4 weeks',
      role: 'Full stack web developer',
      year: '2025',
      rationale: [
        ''
      ],
      visuals: [
        {
          title: '-----------',
          description: '-----------',
        },
        {
          title: '-----------',
          description: '-----------',
        },
        {
          title: '-----------',
          description: '-----------',
        }
      ]
    },
  ];