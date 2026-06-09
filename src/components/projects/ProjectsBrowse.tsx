'use client';

import { useMemo, useState } from 'react';

import EmptyProjects from '@/components/projects/EmptyProjects';
import ProjectsFilters from '@/components/projects/ProjectsFilters';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import { filterProjects, projectCategories, projects } from '@/data/projects';
import type { ProjectCategory } from '@/types/projects';

export default function ProjectsBrowse() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = useMemo(
    () => filterProjects(activeCategory, projects),
    [activeCategory],
  );

  return (
    <section className="section-padding bg-background">
      <ProjectsFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        categories={projectCategories}
      />
      {filteredProjects.length > 0 ? (
        <ProjectsGrid projects={filteredProjects} />
      ) : (
        <EmptyProjects />
      )}
    </section>
  );
}
