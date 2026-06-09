'use client';

import { valueItems } from '@/data/about';
import { useTranslation } from '@/hooks/useTranslation';
import type { TranslationKey } from '@/i18n/translate';

export default function ValuesSection() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-secondary-500 uppercase">{t('about.values.sectionLabel')}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t('about.values.sectionTitle')}</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {valueItems.map((value) => {
            const Icon = value.icon;
            const baseKey = `about.values.${value.id}` as TranslationKey;

            return (
              <article key={value.id} className="card-glow hover-lift rounded-2xl p-6">
                <div className="mb-5 inline-flex rounded-xl bg-primary-500/10 p-3 text-primary-500">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{t(`${baseKey}.title` as TranslationKey)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(`${baseKey}.description` as TranslationKey)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
