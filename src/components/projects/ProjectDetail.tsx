'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ExternalLink, Loader2, Star } from 'lucide-react';

import { GithubIcon } from '@/components/icons/dev-social-icons';
import ApiErrorState from '@/components/ui/ApiErrorState';
import { useTranslation } from '@/hooks/useTranslation';
import type { TranslationKey } from '@/i18n/translate';
import { fetchProjectById, getErrorMessage } from '@/lib/api';
import { resolveLocalized } from '@/types/api/localized';
import type { Project } from '@/types/projects';

export default function ProjectDetail() {
  const { t, locale } = useTranslation();
  const params = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProject = useCallback(async () => {
    if (!params.id) return;

    setLoading(true);
    setError(null);
    setProject(null);

    try {
      const data = await fetchProjectById(params.id);
      setProject(data);
    } catch (err) {
      setError(getErrorMessage(err, t('projects.detail.notFound')));
    } finally {
      setLoading(false);
    }
  }, [params.id, t]);

  useEffect(() => {
    loadProject();
  }, [loadProject]);

  if (loading) {
    return (
      <div className="container-custom flex items-center justify-center gap-2 py-24 text-muted">
        <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
        <span>{t('common.loading')}</span>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="container-custom py-24">
        <ApiErrorState message={error ?? t('projects.detail.notFound')} onRetry={loadProject} retryLabel={t('common.retry')} />
        <div className="mt-6 text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t('projects.detail.back')}
          </Link>
        </div>
      </div>
    );
  }

  const categoryKey = `projects.categories.${project.categoryKey}` as TranslationKey;
  const title = resolveLocalized(project.title, locale);
  const description = resolveLocalized(project.description, locale);
  const imageSrc = project.image?.trim();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <Link href="/projects" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-500 transition-colors hover:text-primary-400">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t('projects.detail.back')}
        </Link>

        <div className={`grid gap-10 lg:items-start${imageSrc ? ' lg:grid-cols-2' : ''}`}>
          {imageSrc && (
            <div className="card-glow overflow-hidden rounded-3xl border border-border">
              <div className="relative aspect-[16/10]">
                <Image src={imageSrc} alt={title} fill unoptimized className="object-cover" />
              </div>
            </div>
          )}

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-medium tracking-wider text-accent uppercase">{t(categoryKey)}</span>
              {project.featured && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-500/10 px-3 py-1 text-xs font-semibold text-secondary-500">
                  <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                  {t('common.featured')}
                </span>
              )}
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
            <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>

            <div className="mt-8">
              <h2 className="text-sm font-semibold tracking-wide text-foreground uppercase">
                {t('projects.detail.technologies')}
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover-lift inline-flex items-center gap-2 rounded-xl bg-primary-500 px-5 py-3 text-sm font-semibold text-white">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  {t('projects.grid.viewLive')}
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover-lift inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground">
                  <GithubIcon className="h-4 w-4" aria-hidden="true" />
                  {t('projects.grid.github')}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
