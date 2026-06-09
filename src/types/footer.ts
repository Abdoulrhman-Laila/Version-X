import type { TranslationKey } from '@/i18n/translate';
import type { socialIconMap } from '@/components/icons/social-icons';

export type FooterSocialId = keyof typeof socialIconMap;

export interface ContactInfo {
  id: string;
  labelKey: TranslationKey;
  value: string;
  href?: string;
  icon: 'map-pin' | 'phone' | 'mail';
}

export interface SocialLink {
  id: FooterSocialId;
  label: string;
  href: string;
}

export interface LegalLink {
  id: string;
  labelKey: TranslationKey;
  href: string;
}

export interface FooterContent {
  contact: ContactInfo[];
  social: SocialLink[];
  legal: LegalLink[];
}
