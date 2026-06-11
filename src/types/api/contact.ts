export const CONTACT_CATEGORIES = [
  'general',
  'project',
  'support',
  'partnership',
  'career',
] as const;

export type ContactCategory = (typeof CONTACT_CATEGORIES)[number];

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  category?: ContactCategory;
}

export const CONTACT_FIELD_LIMITS = {
  name: { min: 2, max: 100 },
  subject: { min: 5, max: 200 },
  message: { min: 20, max: 2000 },
} as const;
