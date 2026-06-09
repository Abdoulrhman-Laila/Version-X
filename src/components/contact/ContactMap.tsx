'use client';

import { mapEmbedUrl } from '@/data/contact';
import { useTranslation } from '@/hooks/useTranslation';

export default function ContactMap() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">{t('contact.map.sectionLabel')}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t('contact.map.title')}</h2>
        </div>
        <div className="card-glow overflow-hidden rounded-3xl border border-border shadow-lg">
          <iframe
            title={t('contact.map.iframeTitle')}
            src={mapEmbedUrl}
            className="aspect-[16/7] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
