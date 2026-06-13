'use client';

import { useCallback, useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';

import Toast from '@/components/ui/Toast';
import { useTranslation } from '@/hooks/useTranslation';
import type { TranslationKey } from '@/i18n/translate';
import { CONTACT_CATEGORIES } from '@/types/api/contact';
import type { ContactFormData } from '@/types/contact';

const initialFormData: ContactFormData = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
  category: 'general',
};

const inputClassName =
  'w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20';

const fields: { id: keyof ContactFormData; labelKey: TranslationKey; placeholderKey: TranslationKey; required?: boolean; type?: string; rows?: number }[] = [
  { id: 'fullName', labelKey: 'contact.form.fullName', placeholderKey: 'contact.form.placeholders.fullName', required: true },
  { id: 'email', labelKey: 'contact.form.email', placeholderKey: 'contact.form.placeholders.email', required: true, type: 'email' },
  { id: 'phone', labelKey: 'contact.form.phone', placeholderKey: 'contact.form.placeholders.phone', type: 'tel' },
  { id: 'company', labelKey: 'contact.form.company', placeholderKey: 'contact.form.placeholders.company' },
];

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const closeSuccessToast = useCallback(() => {
    setShowSuccessToast(false);
  }, []);

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setFormData(initialFormData);
    setIsSubmitting(false);
    setShowSuccessToast(true);
  };

  return (
    <>
      <Toast
        message={t('contact.form.success')}
        isOpen={showSuccessToast}
        onClose={closeSuccessToast}
        closeLabel={t('nav.closeMenu')}
      />
      <div className="glass card-glow rounded-3xl border border-border p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-foreground">{t('contact.form.title')}</h2>
      <p className="mt-2 text-sm text-muted">{t('contact.form.description')}</p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          {fields.slice(0, 2).map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="mb-2 block text-sm font-medium text-foreground">
                {t(field.labelKey)}
              </label>
              <input
                id={field.id}
                type={field.type ?? 'text'}
                required={field.required}
                value={formData[field.id]}
                onChange={(e) => updateField(field.id, e.target.value)}
                className={inputClassName}
                placeholder={t(field.placeholderKey)}
              />
            </div>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {fields.slice(2).map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="mb-2 block text-sm font-medium text-foreground">
                {t(field.labelKey)}
              </label>
              <input
                id={field.id}
                type={field.type ?? 'text'}
                value={formData[field.id]}
                onChange={(e) => updateField(field.id, e.target.value)}
                className={inputClassName}
                placeholder={t(field.placeholderKey)}
              />
            </div>
          ))}
        </div>
        <div>
          <label htmlFor="category" className="mb-2 block text-sm font-medium text-foreground">
            {t('contact.form.category')}
          </label>
          <select
            id="category"
            required
            value={formData.category}
            onChange={(e) => updateField('category', e.target.value)}
            className={inputClassName}
          >
            {CONTACT_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {t(`contact.form.categories.${category}`)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
            {t('contact.form.subject')}
          </label>
          <input
            id="subject"
            type="text"
            required
            value={formData.subject}
            onChange={(e) => updateField('subject', e.target.value)}
            className={inputClassName}
            placeholder={t('contact.form.placeholders.subject')}
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
            {t('contact.form.message')}
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => updateField('message', e.target.value)}
            className={`${inputClassName} resize-none`}
            placeholder={t('contact.form.placeholders.message')}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="hover-lift gradient-bg inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-opacity disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          {isSubmitting ? t('common.sending') : t('contact.form.submit')}
        </button>
      </form>
      </div>
    </>
  );
}
