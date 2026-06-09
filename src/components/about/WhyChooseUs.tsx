'use client';

import { aboutWhyChooseItems } from '@/data/about';
import { useTranslation } from '@/hooks/useTranslation';
import type { TranslationKey } from '@/i18n/translate';

export default function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">{t('about.whyChoose.sectionLabel')}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t('about.whyChoose.sectionTitle')}</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {aboutWhyChooseItems.map((item) => {
            const Icon = item.icon;
            const baseKey = `about.whyChoose.${item.id}` as TranslationKey;

            return (
              <article key={item.id} className="card-glow hover-lift group rounded-2xl p-8">
                <div className="mb-6 inline-flex rounded-xl bg-secondary-500/10 p-3 text-secondary-500 transition-colors group-hover:bg-secondary-500 group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{t(`${baseKey}.title` as TranslationKey)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t(`${baseKey}.description` as TranslationKey)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
