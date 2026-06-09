'use client';

import { Search } from 'lucide-react';

import { useTranslation } from '@/hooks/useTranslation';

export default function EmptyProjects() {
  const { t } = useTranslation();

  return (
    <div className="container-custom mt-12">
      <div className="glass mx-auto max-w-md rounded-3xl p-12 text-center">
        <div className="gradient-bg mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-white">
          <Search className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{t('projects.empty.title')}</h3>
        <p className="mt-2 text-sm text-muted">{t('projects.empty.description')}</p>
      </div>
    </div>
  );
}
