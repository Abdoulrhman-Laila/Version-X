'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { useTranslation } from '@/hooks/useTranslation';

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="gradient-bg absolute inset-0" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.12)_0%,_transparent_50%)]"
            aria-hidden="true"
          />

          <div className="glass relative mx-auto max-w-3xl px-8 py-16 text-center sm:px-12 sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t('home.cta.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
              {t('home.cta.description')}
            </p>
            <Link
              href="/contact"
              className="hover-lift mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-primary-900 shadow-lg transition-colors hover:bg-white/90"
            >
              {t('home.cta.button')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
