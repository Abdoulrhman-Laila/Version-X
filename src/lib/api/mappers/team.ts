import type { DevSocialKey } from '@/components/icons/dev-social-icons';
import type {
  ApiTeamMember,
  ApiTeamSocialLinkItem,
  ApiTeamSocialLinks,
} from '@/types/api/team';
import type { TeamMember } from '@/types/team';

const SOCIAL_KEY_ALIASES: Record<string, DevSocialKey> = {
  github: 'github',
  linkedin: 'linkedin',
  x: 'x',
  twitter: 'x',
  dribbble: 'dribbble',
  behance: 'behance',
};

function applySocialLink(
  result: TeamMember['socialLinks'],
  rawKey: string,
  href: string | undefined,
) {
  if (!href) return;
  const key = SOCIAL_KEY_ALIASES[rawKey.toLowerCase()];
  if (key) result[key] = href;
}

function normalizeSocialRecord(
  links: ApiTeamSocialLinks | undefined,
): TeamMember['socialLinks'] {
  const result: TeamMember['socialLinks'] = {};
  if (!links) return result;

  for (const [rawKey, href] of Object.entries(links)) {
    applySocialLink(result, rawKey, href);
  }

  return result;
}

function isSocialLinkArray(
  links: ApiTeamMember['socialLinks'],
): links is ApiTeamSocialLinkItem[] {
  return Array.isArray(links);
}

function extractTeamSocialLinks(member: ApiTeamMember): TeamMember['socialLinks'] {
  const result = normalizeSocialRecord(member.social);

  if (isSocialLinkArray(member.socialLinks)) {
    for (const item of member.socialLinks) {
      applySocialLink(result, item.platform, item.url);
    }
  } else {
    const fromRecord = normalizeSocialRecord(member.socialLinks);
    for (const [key, href] of Object.entries(fromRecord)) {
      if (href) result[key as DevSocialKey] = href;
    }
  }

  return result;
}

export function mapApiTeamMemberToUi(member: ApiTeamMember): TeamMember {
  return {
    id: 0,
    apiId: member._id ?? member.id ?? '',
    name: member.name,
    roleKey: member.role,
    bio: member.bio,
    image: member.image,
    skills: member.skills ?? [],
    joinedAt: member.joinedAt,
    socialLinks: extractTeamSocialLinks(member),
  };
}

export function mapApiTeamMembersToUi(members: ApiTeamMember[]): TeamMember[] {
  return members
    .filter((member) => member.isActive !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map(mapApiTeamMemberToUi);
}
