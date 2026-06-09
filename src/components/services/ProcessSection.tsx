'use client';

import { processStepItems } from '@/data/services';
import { useTranslation } from '@/hooks/useTranslation';
import type { TranslationKey } from '@/i18n/translate';

export default function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-secondary-500 uppercase">{t('services.process.sectionLabel')}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t('services.process.sectionTitle')}</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processStepItems.map((step) => {
            const Icon = step.icon;
            const baseKey = `services.process.${step.id}` as TranslationKey;
            return (
              <article key={step.id} className="card-glow hover-lift relative rounded-3xl border border-border p-6">
                <span className="gradient-text text-3xl font-bold">{step.step}</span>
                <div className="mt-4 inline-flex rounded-xl bg-primary-500/10 p-3 text-primary-500">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{t(`${baseKey}.title` as TranslationKey)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(`${baseKey}.description` as TranslationKey)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
