export type { Localizable, LocalizedString } from '@/types/api/localized';
export {
  isLocalizedString,
  resolveLocalized,
  resolveLocalizedList,
} from '@/types/api/localized';

export type {
  ApiItemResponse,
  ApiListResponse,
  ApiMessageResponse,
  PaginationMeta,
  PaginationQuery,
} from '@/types/api/common';

export type {
  ContactCategory,
  ContactPayload,
} from '@/types/api/contact';
export { CONTACT_CATEGORIES, CONTACT_FIELD_LIMITS } from '@/types/api/contact';

export type {
  ApiProject,
  ApiProjectCategory,
} from '@/types/api/projects';
export {
  API_PROJECT_CATEGORIES,
  API_TO_UI_PROJECT_CATEGORY,
  UI_TO_API_PROJECT_CATEGORY,
} from '@/types/api/projects';

export type {
  ApiTeamMember,
  ApiTeamRole,
  ApiTeamSocialLinks,
} from '@/types/api/team';
export { API_TEAM_ROLES } from '@/types/api/team';
