import type { TeamMember } from '@/types/team';
import type { CounterStat } from '@/types/stats';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    memberKey: 'ahmed',
    image: '/team/ahmed.svg',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    joinedAt: '2019',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      x: 'https://x.com',
    },
  },
  {
    id: 2,
    memberKey: 'sara',
    image: '/team/sara.svg',
    skills: ['Figma', 'UI Design', 'Design Systems', 'Prototyping'],
    joinedAt: '2020',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      dribbble: 'https://dribbble.com',
      behance: 'https://behance.net',
    },
  },
  {
    id: 3,
    memberKey: 'omar',
    image: '/team/omar.svg',
    skills: ['Python', 'AI', 'Machine Learning', 'LLMs'],
    joinedAt: '2021',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      x: 'https://x.com',
    },
  },
  {
    id: 4,
    memberKey: 'layla',
    image: '/team/layla.svg',
    skills: ['React Native', 'Swift', 'Kotlin', 'Mobile UI'],
    joinedAt: '2021',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 5,
    memberKey: 'james',
    image: '/team/james.svg',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    joinedAt: '2022',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 6,
    memberKey: 'noor',
    image: '/team/noor.svg',
    skills: ['Product Strategy', 'Agile', 'Roadmapping', 'Analytics'],
    joinedAt: '2020',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      x: 'https://x.com',
    },
  },
];

export const teamStats: CounterStat[] = [
  { id: 'experts', value: 20, suffix: '+' },
  { id: 'projects', value: 50, suffix: '+' },
  { id: 'clients', value: 30, suffix: '+' },
  { id: 'yearsExperience', value: 5, suffix: '+' },
];
