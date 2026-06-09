'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { homeServiceItems } from '@/data/home';
import { useTranslation } from '@/hooks/useTranslation';
import type { TranslationKey } from '@/i18n/translate';

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-primary-500 uppercase">
            {t('home.services.sectionLabel')}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('home.services.sectionTitle')}
          </h2>
          <p className="mt-4 text-muted">{t('home.services.sectionDescription')}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {homeServiceItems.map((service) => {
            const Icon = service.icon;
            const baseKey = `home.services.${service.id}` as TranslationKey;

            return (
              <article
                key={service.id}
                className="card-glow hover-lift group relative overflow-hidden p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-5 inline-flex rounded-xl bg-primary-500/10 p-3 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground">
                    {t(`${baseKey}.title` as TranslationKey)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(`${baseKey}.description` as TranslationKey)}
                  </p>

                  <Link
                    href="/services"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-500 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    {t('common.learnMore')}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
