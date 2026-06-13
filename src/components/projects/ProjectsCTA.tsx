'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { useTranslation } from '@/hooks/useTranslation';

export default function ProjectsCTA() {
  const { t } = useTranslation();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="overflow-hidden rounded-3xl bg-cta-surface">
          <div className="relative mx-auto max-w-2xl px-8 py-16 text-center sm:px-12 sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('projects.cta.title')}</h2>
            <Link href="/contact" className="hover-lift mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-cta-surface shadow-lg transition-colors hover:bg-white/90">
              {t('projects.cta.button')}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
