'use client';

import { servicesWhyChooseItems } from '@/data/services';
import { useTranslation } from '@/hooks/useTranslation';
import type { TranslationKey } from '@/i18n/translate';

export default function WhyChooseSection() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-primary-500 uppercase">{t('services.whyChoose.sectionLabel')}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t('services.whyChoose.sectionTitle')}</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {servicesWhyChooseItems.map((item) => {
            const Icon = item.icon;
            const baseKey = `services.whyChoose.${item.id}` as TranslationKey;
            return (
              <article key={item.id} className="card-glow hover-lift rounded-3xl border border-border p-6">
                <div className="mb-4 inline-flex rounded-xl bg-secondary-500/10 p-3 text-secondary-500">
                  <Icon className="h-5 w-5" aria-hidden="true" />
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
