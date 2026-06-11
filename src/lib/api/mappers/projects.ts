import { API_TO_UI_PROJECT_CATEGORY, UI_TO_API_PROJECT_CATEGORY } from '@/types/api/projects';
import type { ApiProject, ApiProjectCategory } from '@/types/api/projects';
import { resolveLocalized } from '@/types/api/localized';
import type { Project, ProjectCategory, ProjectCategoryKey } from '@/types/projects';

export function mapApiCategoryToUi(category: ApiProjectCategory): ProjectCategoryKey {
  return API_TO_UI_PROJECT_CATEGORY[category];
}

export function mapUiCategoryToApi(category: ProjectCategory): ApiProjectCategory | null {
  if (category === 'all') return null;
  return UI_TO_API_PROJECT_CATEGORY[category];
}

function extractProjectImage(project: ApiProject): string {
  const direct = project.image?.trim();
  if (direct) return direct;

  const primary = project.primaryImage?.url?.trim();
  if (primary) return primary;

  const markedPrimary = project.images?.find((image) => image.isPrimary)?.url?.trim();
  if (markedPrimary) return markedPrimary;

  return project.images?.[0]?.url?.trim() ?? '';
}

function extractProjectLinks(project: ApiProject): Pick<Project, 'liveUrl' | 'githubUrl'> {
  const liveUrl = project.links?.live?.trim() || project.liveUrl?.trim();
  const githubUrl = project.links?.github?.trim() || project.githubUrl?.trim();

  return {
    ...(liveUrl ? { liveUrl } : {}),
    ...(githubUrl ? { githubUrl } : {}),
  };
}

export function mapApiProjectToUi(project: ApiProject): Project {
  const titleForSlug = resolveLocalized(project.title, 'en');
  const slug =
    project.slug?.trim() ||
    titleForSlug
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

  return {
    id: 0,
    apiId: project._id ?? project.id ?? '',
    slug,
    title: project.title,
    description: project.description,
    image: extractProjectImage(project),
    categoryKey: mapApiCategoryToUi(project.category),
    technologies: project.technologies ?? [],
    featured: project.featured ?? false,
    ...extractProjectLinks(project),
  };
}

export function mapApiProjectsToUi(projects: ApiProject[]): Project[] {
  return projects
    .filter((project) => project.isPublic !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map(mapApiProjectToUi);
}
