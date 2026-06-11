import type { Localizable } from '@/types/api/localized';
import type { ApiTeamRole } from '@/types/api/team';

export interface TeamMember {
  id: number;
  apiId: string;
  name: Localizable;
  roleKey: ApiTeamRole | string;
  bio: Localizable;
  image: string;
  skills: Localizable[];
  joinedAt?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    x?: string;
    dribbble?: string;
    behance?: string;
  };
}
