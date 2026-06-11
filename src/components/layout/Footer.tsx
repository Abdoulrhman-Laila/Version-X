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
    <footer className="site-footer relative mt-auto overflow-hidden rounded-t-[2rem]">
      <div className="container-custom section-padding !pb-8 !pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="space-y-5 md:col-span-2 lg:col-span-1">
            <BrandLogo
              href={brand.homeHref}
              variant="footer"
              showTagline
              iconClassName="h-11 w-auto shrink-0 object-contain sm:h-12"
              nameClassName="flex items-baseline gap-0.5 text-lg font-bold tracking-tight"
              taglineClassName="site-footer__tagline mt-1 text-xs tracking-wide"
            />

            <p className="footer-muted max-w-sm text-sm leading-relaxed">
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
                  <Link href={item.href} className="footer-link text-sm">
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
                <li key={key} className="footer-link flex items-start gap-2.5 text-sm">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
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
                  <a href={item.href} className="footer-link text-sm">
                    {item.value}
                  </a>
                ) : (
                  <span className="footer-link text-sm">{item.value}</span>
                );

                return (
                  <li key={item.id} className="flex gap-3">
                    <span className="footer-icon-box flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-accent">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="footer-muted text-xs font-medium">{t(item.labelKey)}</p>
                      {content}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="footer-divider mt-12 flex flex-wrap items-center gap-4 border-t pt-10">
          <span className="footer-muted text-sm font-medium">{t('common.followUs')}</span>
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
                  className="footer-social hover-lift flex h-10 w-10 items-center justify-center rounded-full"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer-divider mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="footer-muted text-sm">
            &copy; {currentYear} {t('common.brandName')}. {t('common.allRightsReserved')}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {footerContent.legal.map((link) => (
              <Link key={link.id} href={link.href} className="footer-muted footer-link text-sm">
                {t(link.labelKey)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
