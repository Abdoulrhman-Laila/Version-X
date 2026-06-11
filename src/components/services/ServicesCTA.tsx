'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { useTranslation } from '@/hooks/useTranslation';

export default function ServicesCTA() {
  const { t } = useTranslation();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="overflow-hidden rounded-3xl bg-cta-surface">
          <div className="relative px-8 py-16 text-center sm:px-12 sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('services.cta.title')}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">{t('services.cta.description')}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="hover-lift inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-primary-900 shadow-lg transition-colors hover:bg-white/90">
                {t('services.cta.primaryCta')}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/projects" className="hover-lift inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                {t('services.cta.secondaryCta')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
