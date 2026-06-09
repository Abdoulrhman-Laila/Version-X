'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function StorySection() {
  const { dictionary, t } = useTranslation();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold tracking-widest text-primary-500 uppercase">{t('about.story.sectionLabel')}</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t('about.story.title')}</h2>
            <div className="mt-6 space-y-4">
              {dictionary.about.story.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="leading-relaxed text-muted">{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="card-glow hover-lift relative overflow-hidden rounded-3xl p-10 text-center sm:p-14">
            <div className="gradient-bg absolute inset-0 opacity-10" aria-hidden="true" />
            <div className="relative">
              <p className="gradient-text text-6xl font-bold sm:text-7xl">{t('about.story.experienceValue')}</p>
              <p className="mt-3 text-lg font-semibold text-foreground">{t('about.story.experienceLabel')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
