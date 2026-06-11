'use client';

import { useCallback, useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

import ApiErrorState from '@/components/ui/ApiErrorState';
import EmptyProjects from '@/components/projects/EmptyProjects';
import ProjectsFilters from '@/components/projects/ProjectsFilters';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import { projectCategories } from '@/data/projects';
import { useTranslation } from '@/hooks/useTranslation';
import {
  fetchProjects,
  fetchProjectsByCategory,
  getErrorMessage,
  mapUiCategoryToApi,
} from '@/lib/api';
import type { Project, ProjectCategory } from '@/types/projects';

export default function ProjectsBrowse() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProjects = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const apiCategory = mapUiCategoryToApi(activeCategory);
      const data =
        apiCategory === null
          ? await fetchProjects({ page: 1, limit: 50 })
          : await fetchProjectsByCategory(apiCategory, { page: 1, limit: 50 });

      setProjects(data);
    } catch (err) {
      setProjects([]);
      setError(getErrorMessage(err, t('projects.loadError')));
    } finally {
      setLoading(false);
    }
  }, [activeCategory, t]);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  return (
    <section className="section-padding bg-background">
      <ProjectsFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        categories={projectCategories}
      />

      {loading ? (
        <div className="container-custom mt-12 flex items-center justify-center gap-2 py-16 text-muted">
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
          <span>{t('common.loading')}</span>
        </div>
      ) : error ? (
        <div className="container-custom mt-12">
          <ApiErrorState message={error} onRetry={loadProjects} retryLabel={t('common.retry')} />
        </div>
      ) : projects.length > 0 ? (
        <ProjectsGrid projects={projects} />
      ) : (
        <EmptyProjects />
      )}
    </section>
  );
}
