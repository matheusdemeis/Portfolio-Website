import tandemBlogImage from '../assets/tandem/tandem-blog.png';

export const projects = [
    {
      id: 3,
      title: 'Tandem',
      description: 'Tandem is a scheduling app that helps tradeworkers manage busy work hours, coordinate childcare, and stay organized throughout the week.',
      tags: ['Typescript', 'Next.js', 'React', 'Tailwind CSS'],
      link: 'https://github.com/IDSP-TRADECARE/Tandem',
      blog: {
        title: 'Tandem Blog',
        description: 'Behind-the-scenes stories, visuals, and updates from the Tandem project.',
        url: 'https://tandem-blog.vercel.app/',
        image: tandemBlogImage
      },
      brand: {
        name: 'Tandem',
        tone: 'Practical, calm scheduling',
        accent: '#4A9B9B'
      },
      timeline: '16 weeks',
      role: 'UX Strategy, UI Design',
      year: '2025',
      rationale: [
        'Reduce scheduling stress with a focused weekly view and quick actions.',
        'Use approachable color coding to distinguish work, childcare, and personal blocks.',
        'Design for fast handoff between partners and caregivers.'
      ],
      visuals: [
        {
          title: 'Weekly Schedule Grid',
          description: 'High-contrast time blocks with glanceable categories.'
        },
        {
          title: 'Shared Responsibilities',
          description: 'Assigned tasks with status indicators to avoid missed steps.'
        },
        {
          title: 'Notification Ladder',
          description: 'Priority tiering for reminders so critical tasks surface first.'
        }
      ]
    },
    {
      id: 2,
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
      role: 'Product + UI Design, Frontend Dev',
      year: '2025',
      rationale: [
        'Design a trust-first flow so users feel safe listing and borrowing items.',
        'Keep the UI lightweight to support quick listing and instant chat.',
        'Highlight verified profiles and clear pricing to reduce friction.'
      ],
      visuals: [
        {
          title: 'Listing Cards System',
          description: 'Image-first cards with consistent pricing and availability layout.'
        },
        {
          title: 'Trust & Verification Badges',
          description: 'Color-coded signals for verified sellers and safe transactions.'
        },
        {
          title: 'Chat + Checkout Panel',
          description: 'Split layout that keeps conversation and checkout visible together.'
        }
      ]
    },
  ];