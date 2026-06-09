export type TeamMemberKey = 'ahmed' | 'sara' | 'omar' | 'layla' | 'james' | 'noor';

export interface TeamMember {
  id: number;
  memberKey: TeamMemberKey;
  image: string;
  skills: string[];
  joinedAt?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    x?: string;
    dribbble?: string;
    behance?: string;
  };
}
