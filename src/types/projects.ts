import type { Localizable } from '@/types/api/localized';

export type ProjectCategory =
  | 'all'
  | 'websites'
  | 'mobileApps'
  | 'ecommerce'
  | 'corporateSystems';

export type ProjectCategoryKey = Exclude<ProjectCategory, 'all'>;

export interface Project {
  id: number;
  apiId: string;
  slug: string;
  title: Localizable;
  description: Localizable;
  image: string;
  categoryKey: ProjectCategoryKey;
  technologies: string[];
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
}
