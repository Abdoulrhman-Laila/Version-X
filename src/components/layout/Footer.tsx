'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

import BrandLogo from '@/components/layout/BrandLogo';
import { socialIconMap } from '@/components/icons/social-icons';
import { footerContent, footerServiceKeys } from '@/data/footer';
import { brand, navItems } from '@/data/navigation';
import { useTranslation } from '@/hooks/useTranslation';
import type { TranslationKey } from '@/i18n/translate';

const contactIconMap = {
  'map-pin': MapPin,
  phone: Phone,
  mail: Mail,
} as const;

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden rounded-t-[2rem] bg-primary-900 text-white">
      <div className="gradient-bg absolute inset-0 opacity-15" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(24,199,255,0.12)_0%,_transparent_50%)]"
        aria-hidden="true"
      />

      <div
        className="absolute top-[-6rem] left-[-4rem] h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-[30%] right-[-5rem] h-80 w-80 rounded-full bg-primary-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-4rem] left-[40%] h-64 w-64 rounded-full bg-secondary-500/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 section-padding !pb-8 !pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="space-y-5 md:col-span-2 lg:col-span-1">
            <BrandLogo
              href={brand.homeHref}
              variant="footer"
              showTagline
              iconClassName="h-11 w-auto shrink-0 object-contain sm:h-12"
              nameClassName="flex items-baseline gap-0.5 text-lg font-bold tracking-tight"
              taglineClassName="mt-1 text-xs tracking-wide text-white/60"
            />

            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-widest text-accent uppercase">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {t(`nav.${item.id}` as TranslationKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-widest text-accent uppercase">
              {t('footer.servicesTitle')}
            </h3>
            <ul className="space-y-3">
              {footerServiceKeys.map((key) => (
                <li
                  key={key}
                  className="flex items-start gap-2.5 text-sm text-white/70"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {t(`footer.services.${key}` as TranslationKey)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-widest text-accent uppercase">
              {t('footer.contactTitle')}
            </h3>
            <ul className="space-y-4">
              {footerContent.contact.map((item) => {
                const Icon = contactIconMap[item.icon];
                const content = item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-sm text-white/70">{item.value}</span>
                );

                return (
                  <li key={item.id} className="flex gap-3">
                    <span className="glass flex h-9 w-9 shrink-0 items-center justify-center rounded-lg !border-white/10 !bg-white/5 text-accent">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-white/50">{t(item.labelKey)}</p>
                      {content}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-white/10 pt-10">
          <span className="text-sm font-medium text-white/50">{t('common.followUs')}</span>
          <div className="flex flex-wrap gap-3">
            {footerContent.social.map((social) => {
              const Icon = socialIconMap[social.id];

              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover-lift gradient-bg flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg shadow-primary-500/20 transition-opacity hover:opacity-90"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {currentYear} {t('common.brandName')}. {t('common.allRightsReserved')}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {footerContent.legal.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
