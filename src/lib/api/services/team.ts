import { apiClient } from '@/lib/api/client';
import { API_ENDPOINTS } from '@/lib/api/config';
import { mapApiTeamMemberToUi, mapApiTeamMembersToUi } from '@/lib/api/mappers/team';
import { unwrapItem, unwrapList } from '@/lib/api/utils/response';
import type { PaginationQuery } from '@/types/api/common';
import type { ApiTeamMember, ApiTeamRole } from '@/types/api/team';
import type { TeamMember } from '@/types/team';

export async function fetchTeamMembers(query?: PaginationQuery): Promise<TeamMember[]> {
  const response = await apiClient.get<unknown>(API_ENDPOINTS.team, { query });
  return mapApiTeamMembersToUi(unwrapList<ApiTeamMember>(response));
}

export async function fetchTeamMemberById(id: string): Promise<TeamMember> {
  const response = await apiClient.get<unknown>(API_ENDPOINTS.teamById(id));
  return mapApiTeamMemberToUi(unwrapItem<ApiTeamMember>(response));
}

export async function fetchTeamByRole(role: ApiTeamRole): Promise<TeamMember[]> {
  const response = await apiClient.get<unknown>(API_ENDPOINTS.teamByRole(role));
  return mapApiTeamMembersToUi(unwrapList<ApiTeamMember>(response));
}
