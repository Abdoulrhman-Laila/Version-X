import type { Project, ProjectCategory } from '@/types/projects';

export const projectCategories: ProjectCategory[] = [
  'all',
  'websites',
  'mobileApps',
  'ecommerce',
  'corporateSystems',
];

export const projects: Project[] = [
  {
    id: 1,
    slug: 'neura-platform',
    image: '/projects/neura-platform.svg',
    categoryKey: 'corporateSystems',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'AI', 'MongoDB'],
    featured: true,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    slug: 'flux-commerce',
    image: '/projects/flux-commerce.svg',
    categoryKey: 'ecommerce',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    featured: true,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    slug: 'pulse-health',
    image: '/projects/pulse-health.svg',
    categoryKey: 'mobileApps',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'MongoDB'],
    featured: true,
    liveUrl: 'https://example.com',
  },
  {
    id: 4,
    slug: 'version-x-corporate',
    image: '/projects/flux-commerce.svg',
    categoryKey: 'websites',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
  },
  {
    id: 5,
    slug: 'shopwave',
    image: '/projects/neura-platform.svg',
    categoryKey: 'ecommerce',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 6,
    slug: 'fleet-manager',
    image: '/projects/pulse-health.svg',
    categoryKey: 'corporateSystems',
    technologies: ['TypeScript', 'Node.js', 'React', 'MongoDB'],
    githubUrl: 'https://github.com',
  },
];

export function filterProjects(
  category: ProjectCategory,
  items: Project[] = projects,
): Project[] {
  if (category === 'all') return items;
  return items.filter((project) => project.categoryKey === category);
}
