export { API_BASE_URL, API_ENDPOINTS } from '@/lib/api/config';
export { ApiError, getErrorMessage, isApiError } from '@/lib/api/errors';
export { apiClient } from '@/lib/api/client';
export type { RequestOptions } from '@/lib/api/client';

export { mapContactFormToPayload } from '@/lib/api/mappers/contact';
export type { ContactFormSubmitInput } from '@/lib/api/mappers/contact';

export {
  mapApiCategoryToUi,
  mapApiProjectToUi,
  mapApiProjectsToUi,
  mapUiCategoryToApi,
} from '@/lib/api/mappers/projects';

export {
  mapApiTeamMemberToUi,
  mapApiTeamMembersToUi,
} from '@/lib/api/mappers/team';

export { submitContactForm } from '@/lib/api/services/contact';

export {
  fetchFeaturedProjects,
  fetchProjectById,
  fetchProjects,
  fetchProjectsByCategory,
} from '@/lib/api/services/projects';

export {
  fetchTeamByRole,
  fetchTeamMemberById,
  fetchTeamMembers,
} from '@/lib/api/services/team';
