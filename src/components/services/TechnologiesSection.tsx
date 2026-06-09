'use client';

import { technologies } from '@/data/services';
import { useTranslation } from '@/hooks/useTranslation';

export default function TechnologiesSection() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">{t('services.technologies.sectionLabel')}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t('services.technologies.sectionTitle')}</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {technologies.map((tech) => (
            <div key={tech} className="glass hover-lift rounded-2xl border border-border px-4 py-5 text-center transition-colors hover:border-primary-400">
              <span className="text-sm font-semibold text-foreground">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
