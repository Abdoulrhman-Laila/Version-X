'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';

import BrandLogo from '@/components/layout/BrandLogo';
import { useTranslation } from '@/hooks/useTranslation';
import { brand, navItems } from '@/data/navigation';
import type { Theme } from '@/types/navigation';
import type { TranslationKey } from '@/i18n/translate';

function isNavActive(pathname: string, currentHash: string, href: string): boolean {
  const [path, hash] = href.split('#');

  if (hash) {
    return pathname === path && currentHash === `#${hash}`;
  }

  if (path === '/home') {
    return (pathname === '/home' || pathname === '/') && !currentHash;
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}

function getNavLinkClass(isActive: boolean, mobile = false): string {
  const classes = ['nav-link'];

  if (mobile) {
    classes.push('w-full justify-start px-4 py-3');
    if (isActive) classes.push('nav-link-mobile--active');
  } else if (isActive) {
    classes.push('nav-link--active');
  }

  return classes.join(' ');
}

export default function Header() {
  const pathname = usePathname();
  const { locale, t, toggleLocale, isRTL } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash);
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, [pathname]);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme ?? (prefersDark ? 'dark' : 'light');

    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', next === 'dark');
      localStorage.setItem('theme', next);
      return next;
    });
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-border bg-background transition-shadow duration-300 ${isScrolled ? 'shadow-sm' : ''}`}
    >

      <div className="container-custom">
        <div className="flex h-20 items-center justify-between gap-4">
          <BrandLogo
            href={brand.homeHref}
            onClick={closeMobileMenu}
            iconClassName="h-10 w-auto shrink-0 object-contain sm:h-11"
            nameClassName="flex items-baseline gap-0.5 text-lg font-bold tracking-tight sm:text-xl"
          />

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label={t('nav.mainNavigation')}
          >
            {navItems.map((item) => {
              const active = isNavActive(pathname, currentHash, item.href);
              const labelKey = `nav.${item.id}` as TranslationKey;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={getNavLinkClass(active)}
                >
                  {t(labelKey)}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={toggleLocale}
              className="hover-lift hidden rounded-lg border border-border bg-surface px-3 py-2 text-xs font-semibold tracking-wide text-foreground uppercase sm:inline-flex"
              aria-label={locale === 'en' ? t('nav.switchToArabic') : t('nav.switchToEnglish')}
            >
              {locale === 'en' ? t('nav.arabicLabel') : t('nav.englishLabel')}
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="hover-lift inline-flex rounded-lg border border-border bg-surface p-2.5 text-foreground transition-colors hover:text-primary-500"
              aria-label={theme === 'light' ? t('nav.switchToDark') : t('nav.switchToLight')}
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Sun className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="hover-lift inline-flex rounded-lg border border-border bg-surface p-2.5 text-foreground lg:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <nav
              className="container-custom space-y-1 py-4"
              aria-label={t('nav.mobileNavigation')}
            >
              {navItems.map((item, index) => {
                const active = isNavActive(pathname, currentHash, item.href);
                const labelKey = `nav.${item.id}` as TranslationKey;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: isRTL ? 12 : -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={getNavLinkClass(active, true)}
                      onClick={closeMobileMenu}
                    >
                      {t(labelKey)}
                    </Link>
                  </motion.div>
                );
              })}

              <button
                type="button"
                onClick={toggleLocale}
                className="nav-link mt-2 w-full justify-start border border-border px-4 py-3 sm:hidden"
              >
                {locale === 'en' ? t('nav.arabicFull') : t('nav.englishFull')}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
