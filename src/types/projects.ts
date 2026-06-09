export type ProjectCategory =
  | 'all'
  | 'websites'
  | 'mobileApps'
  | 'ecommerce'
  | 'corporateSystems';

export type ProjectCategoryKey = Exclude<ProjectCategory, 'all'>;

export interface Project {
  id: number;
  slug: string;
  image: string;
  categoryKey: ProjectCategoryKey;
  technologies: string[];
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
}
