'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import { defaultLocale, localeDirection, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { createTranslator, type TranslationKey } from '@/i18n/translate';
import type { Dictionary } from '@/i18n/dictionaries/en';

const LOCALE_STORAGE_KEY = 'locale';

interface LocaleContextValue {
  locale: Locale;
  dictionary: Dictionary;
  t: (key: TranslationKey) => string;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  isRTL: boolean;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored === 'en' || stored === 'ar') {
      setLocaleState(stored);
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    document.documentElement.lang = locale;
    document.documentElement.dir = localeDirection[locale];
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale, isReady]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const dictionary = useMemo(() => getDictionary(locale), [locale]);
  const t = useMemo(() => createTranslator(dictionary), [dictionary]);

  const value = useMemo(
    () => ({
      locale,
      dictionary,
      t,
      setLocale,
      toggleLocale,
      isRTL: locale === 'ar',
    }),
    [locale, dictionary, t, setLocale, toggleLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useTranslation() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useTranslation must be used within LocaleProvider');
  }
  return context;
}
