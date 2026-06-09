import type { LucideIcon } from 'lucide-react';

export interface ContactInfoItem {
  id: 'email' | 'phone' | 'location' | 'hours';
  value: string;
  href?: string;
  icon: LucideIcon;
}

export type FAQItemId = 'start' | 'timeline' | 'support' | 'seo' | 'ecommerce';

export interface FAQItem {
  id: FAQItemId;
}

export interface SocialLinkItem {
  id: 'linkedin' | 'github' | 'facebook' | 'instagram';
  label: string;
  href: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}
