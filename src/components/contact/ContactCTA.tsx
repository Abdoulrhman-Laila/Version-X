'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { useTranslation } from '@/hooks/useTranslation';

export default function ContactCTA() {
  const { t } = useTranslation();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="gradient-bg absolute inset-0" aria-hidden="true" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" aria-hidden="true" />
          <div className="glass relative px-8 py-16 text-center sm:px-12 sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('contact.cta.title')}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">{t('contact.cta.description')}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="hover-lift inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-primary-900 shadow-lg transition-colors hover:bg-white/90">
                {t('contact.cta.primaryCta')}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/projects" className="hover-lift inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                {t('contact.cta.secondaryCta')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
