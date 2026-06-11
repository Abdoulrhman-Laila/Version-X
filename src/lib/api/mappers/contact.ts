import type { ContactFormData } from '@/types/contact';
import type { ContactPayload } from '@/types/api/contact';

export type ContactFormSubmitInput = ContactFormData;

export function mapContactFormToPayload(input: ContactFormSubmitInput): ContactPayload {
  const payload: ContactPayload = {
    name: input.fullName.trim(),
    email: input.email.trim(),
    subject: input.subject.trim(),
    message: input.message.trim(),
    category: input.category,
  };

  const phone = input.phone.trim();
  if (phone) payload.phone = phone;

  if (input.company.trim()) {
    payload.message = `Company: ${input.company.trim()}\n\n${payload.message}`;
  }

  return payload;
}
