'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink, Star } from 'lucide-react';

import { GithubIcon } from '@/components/icons/dev-social-icons';
import { useTranslation } from '@/hooks/useTranslation';
import type { TranslationKey } from '@/i18n/translate';
import type { Project } from '@/types/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();
  const itemKey = `projects.items.${project.slug}` as TranslationKey;
  const categoryKey = `projects.categories.${project.categoryKey}` as TranslationKey;

  return (
    <article className="card-glow hover-lift group overflow-hidden rounded-3xl border border-border">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={t(`${itemKey}.title` as TranslationKey)}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary-900/0 transition-colors duration-300 group-hover:bg-primary-900/40" />
        {project.featured && (
          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-secondary-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            <Star className="h-3 w-3 fill-current" aria-hidden="true" />
            {t('common.featured')}
          </span>
        )}
      </div>
      <div className="p-6">
        <span className="text-xs font-medium tracking-wider text-accent uppercase">{t(categoryKey)}</span>
        <h3 className="mt-2 text-lg font-semibold text-foreground">{t(`${itemKey}.title` as TranslationKey)}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{t(`${itemKey}.description` as TranslationKey)}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3 border-t border-border pt-5">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 transition-colors hover:text-primary-400">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              {t('projects.grid.viewLive')}
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-foreground">
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
              {t('projects.grid.github')}
            </a>
          )}
          <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary-500 transition-colors hover:text-secondary-400">
            {t('projects.grid.viewDetails')}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
