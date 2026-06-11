import type { Localizable } from '@/types/api/localized';

export const API_TEAM_ROLES = [
  'fullstack',
  'frontend',
  'backend',
  'ui',
  'ux',
  'manager',
  'designer',
] as const;

export type ApiTeamRole = (typeof API_TEAM_ROLES)[number];

export type ApiTeamSocialLinks = Record<string, string | undefined>;

export interface ApiTeamSocialLinkItem {
  platform: string;
  url: string;
}

export interface ApiTeamMember {
  _id: string;
  id?: string;
  name: Localizable;
  role: ApiTeamRole | string;
  bio: Localizable;
  image: string;
  skills: (Localizable | string)[];
  joinedAt?: string;
  social?: ApiTeamSocialLinks;
  socialLinks?: ApiTeamSocialLinks | ApiTeamSocialLinkItem[];
  order?: number;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
