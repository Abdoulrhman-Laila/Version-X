import type { Locale } from '@/i18n/config';

export interface LocalizedString {
  ar: string;
  en: string;
}

export type Localizable = string | LocalizedString;

export function isLocalizedString(value: unknown): value is LocalizedString {
  return (
    typeof value === 'object' &&
    value !== null &&
    'ar' in value &&
    'en' in value &&
    typeof (value as LocalizedString).ar === 'string' &&
    typeof (value as LocalizedString).en === 'string'
  );
}

export function resolveLocalized(value: unknown, locale: Locale): string {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (isLocalizedString(value)) {
    return value[locale] ?? value.en ?? value.ar ?? '';
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }
  return '';
}

export function resolveLocalizedList(values: unknown, locale: Locale): string[] {
  if (!Array.isArray(values)) return [];
  return values
    .map((item) => resolveLocalized(item, locale))
    .filter((item) => item.length > 0);
}
