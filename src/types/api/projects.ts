import type { Localizable } from '@/types/api/localized';
import type { ProjectCategoryKey } from '@/types/projects';

export const API_PROJECT_CATEGORIES = [
  'website',
  'mobile',
  'ecommerce',
  'corporate',
  'other',
] as const;

export type ApiProjectCategory = (typeof API_PROJECT_CATEGORIES)[number];

export interface ApiProjectImage {
  _id?: string;
  id?: string;
  url: string;
  alt?: string | null;
  isPrimary?: boolean;
}

export interface ApiProjectLinks {
  live?: string;
  github?: string;
}

export interface ApiProject {
  _id: string;
  id?: string;
  title: Localizable;
  description: Localizable;
  image?: string;
  images?: ApiProjectImage[];
  primaryImage?: ApiProjectImage | null;
  category: ApiProjectCategory;
  technologies: string[];
  links?: ApiProjectLinks;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  slug?: string;
  order?: number;
  isPublic?: boolean;
  status?: string;
  url?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const UI_TO_API_PROJECT_CATEGORY: Record<ProjectCategoryKey, ApiProjectCategory> = {
  websites: 'website',
  mobileApps: 'mobile',
  ecommerce: 'ecommerce',
  corporateSystems: 'corporate',
};

export const API_TO_UI_PROJECT_CATEGORY: Record<ApiProjectCategory, ProjectCategoryKey> = {
  website: 'websites',
  mobile: 'mobileApps',
  ecommerce: 'ecommerce',
  corporate: 'corporateSystems',
  other: 'corporateSystems',
};
