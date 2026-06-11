import { apiClient } from '@/lib/api/client';
import { API_ENDPOINTS } from '@/lib/api/config';
import { mapApiProjectToUi, mapApiProjectsToUi } from '@/lib/api/mappers/projects';
import { unwrapItem, unwrapList } from '@/lib/api/utils/response';
import type { ApiProject, ApiProjectCategory } from '@/types/api/projects';
import type { PaginationQuery } from '@/types/api/common';
import type { Project } from '@/types/projects';

export async function fetchProjects(query?: PaginationQuery): Promise<Project[]> {
  const response = await apiClient.get<unknown>(API_ENDPOINTS.projects, { query });
  return mapApiProjectsToUi(unwrapList<ApiProject>(response));
}

export async function fetchProjectById(id: string): Promise<Project> {
  const response = await apiClient.get<unknown>(API_ENDPOINTS.projectById(id));
  return mapApiProjectToUi(unwrapItem<ApiProject>(response));
}

export async function fetchFeaturedProjects(): Promise<Project[]> {
  const response = await apiClient.get<unknown>(API_ENDPOINTS.projectsFeatured);
  return mapApiProjectsToUi(unwrapList<ApiProject>(response));
}

export async function fetchProjectsByCategory(
  category: ApiProjectCategory,
  query?: PaginationQuery,
): Promise<Project[]> {
  const response = await apiClient.get<unknown>(API_ENDPOINTS.projectsByCategory(category), {
    query,
  });
  return mapApiProjectsToUi(unwrapList<ApiProject>(response));
}
