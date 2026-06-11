export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') ?? '/api';

export const API_ENDPOINTS = {
  contact: '/contact',
  projects: '/projects',
  projectById: (id: string) => `/projects/${id}`,
  projectsFeatured: '/projects/featured',
  projectsByCategory: (category: string) => `/projects/category/${category}`,
  team: '/team',
  teamById: (id: string) => `/team/${id}`,
  teamByRole: (role: string) => `/team/role/${role}`,
} as const;
