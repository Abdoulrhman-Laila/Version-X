'use client';

import { useTranslation } from '@/hooks/useTranslation';
import type { TranslationKey } from '@/i18n/translate';
import type { ProjectCategory } from '@/types/projects';

interface ProjectsFiltersProps {
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
  categories: ProjectCategory[];
}

export default function ProjectsFilters({ activeCategory, onCategoryChange, categories }: ProjectsFiltersProps) {
  const { t } = useTranslation();

  return (
    <div className="container-custom">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                isActive
                  ? 'gradient-bg text-white shadow-lg shadow-primary-500/25'
                  : 'border border-border bg-surface text-muted hover:border-primary-400 hover:text-foreground'
              }`}
            >
              {t(`projects.filters.${category}` as TranslationKey)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
