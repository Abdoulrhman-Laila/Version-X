'use client';

import { contactInfoItems } from '@/data/contact';
import { useTranslation } from '@/hooks/useTranslation';
import type { TranslationKey } from '@/i18n/translate';

const labelKeys: Record<string, TranslationKey> = {
  email: 'contact.info.email',
  phone: 'contact.info.phone',
  location: 'contact.info.location',
  hours: 'contact.info.workingHours',
};

function getDisplayValue(
  id: string,
  value: string,
  t: (key: TranslationKey) => string,
): string {
  if (id === 'location') return t('contact.info.locationValue');
  if (id === 'hours') return t('contact.info.hoursValue');
  return value;
}

export default function ContactInfoCards() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {contactInfoItems.map((item) => {
            const Icon = item.icon;
            const displayValue = getDisplayValue(item.id, item.value, t);
            const content = item.href ? (
              <a href={item.href} className="mt-2 block whitespace-pre-line text-sm leading-relaxed text-muted transition-colors hover:text-primary-500">
                {displayValue}
              </a>
            ) : (
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted">{displayValue}</p>
            );

            return (
              <article key={item.id} className="glass card-glow hover-lift rounded-3xl border border-border p-6">
                <div className="gradient-bg mb-4 inline-flex rounded-xl p-3 text-white shadow-lg shadow-primary-500/20">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">{t(labelKeys[item.id])}</h3>
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
