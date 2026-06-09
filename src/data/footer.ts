import type { FooterContent } from '@/types/footer';

export const footerServiceKeys = [
  'webDevelopment',
  'webDesign',
  'mobileApplications',
  'aiSolutions',
  'ecommerce',
  'maintenance',
] as const;

export const footerContent: FooterContent = {
  contact: [
    {
      id: 'location',
      labelKey: 'footer.location',
      value: 'Dubai, United Arab Emirates',
      icon: 'map-pin',
    },
    {
      id: 'phone',
      labelKey: 'footer.phone',
      value: '+971 50 000 0000',
      href: 'tel:+971500000000',
      icon: 'phone',
    },
    {
      id: 'email',
      labelKey: 'footer.email',
      value: 'hello@versionx.com',
      href: 'mailto:hello@versionx.com',
      icon: 'mail',
    },
  ],
  social: [
    { id: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
    { id: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
    { id: 'twitter', label: 'X (Twitter)', href: 'https://x.com' },
  ],
  legal: [
    { id: 'privacy', labelKey: 'footer.privacyPolicy', href: '/privacy' },
    { id: 'terms', labelKey: 'footer.termsOfService', href: '/terms' },
  ],
};
