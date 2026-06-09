'use client';

import Link from 'next/link';
import { ArrowRight, Users } from 'lucide-react';

import { teamPreviewPlaceholders } from '@/data/about';
import { useTranslation } from '@/hooks/useTranslation';
import type { TranslationKey } from '@/i18n/translate';

export default function TeamPreview() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="glass card-glow rounded-3xl p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex rounded-xl bg-primary-500/10 p-3 text-primary-500">
                <Users className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t('about.teamPreview.title')}</h2>
              <p className="mt-4 leading-relaxed text-muted">{t('about.teamPreview.description')}</p>
              <Link href="/team" className="hover-lift mt-8 inline-flex items-center gap-2 rounded-xl bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-colors hover:bg-primary-600">
                {t('about.teamPreview.cta')}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {teamPreviewPlaceholders.map((member) => (
                <div key={member.id} className="card-glow hover-lift rounded-2xl p-5 text-center">
                  <div className="gradient-bg mx-auto flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold text-white">{member.initials}</div>
                  <p className="mt-3 text-xs font-medium text-muted">
                    {t(`about.teamPreview.placeholders.${member.roleKey}` as TranslationKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
