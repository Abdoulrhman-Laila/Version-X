import { Clock, Mail, MapPin, Phone } from 'lucide-react';

import type { ContactInfoItem, FAQItem, SocialLinkItem } from '@/types/contact';

export const contactInfoItems: ContactInfoItem[] = [
  {
    id: 'email',
    value: 'info@versionx.com',
    href: 'mailto:info@versionx.com',
    icon: Mail,
  },
  {
    id: 'phone',
    value: '+31 XXX XXX XXX',
    href: 'tel:+31000000000',
    icon: Phone,
  },
  {
    id: 'location',
    value: '',
    icon: MapPin,
  },
  {
    id: 'hours',
    value: '',
    icon: Clock,
  },
];

export const socialLinks: SocialLinkItem[] = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
  { id: 'github', label: 'GitHub', href: 'https://github.com' },
  { id: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
];

export const faqItems: FAQItem[] = [
  { id: 'start' },
  { id: 'timeline' },
  { id: 'support' },
  { id: 'seo' },
  { id: 'ecommerce' },
];

export const mapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.44694974277!2d4.763385!3d52.367573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3f87d9481%3A0x9ebd434c6c28638e!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s';
