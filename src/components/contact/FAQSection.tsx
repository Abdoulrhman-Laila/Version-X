'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { faqItems } from '@/data/contact';
import { useTranslation } from '@/hooks/useTranslation';
import type { TranslationKey } from '@/i18n/translate';

export default function FAQSection() {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-secondary-500 uppercase">{t('contact.faq.sectionLabel')}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t('contact.faq.title')}</h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            const baseKey = `contact.faq.items.${item.id}` as TranslationKey;
            return (
              <article key={item.id} className="glass card-glow overflow-hidden rounded-2xl border border-border transition-colors hover:border-primary-400/40">
                <button type="button" onClick={() => toggle(item.id)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left" aria-expanded={isOpen}>
                  <span className="text-sm font-semibold text-foreground sm:text-base">{t(`${baseKey}.question` as TranslationKey)}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-primary-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
                      <p className="border-t border-border px-6 py-5 text-sm leading-relaxed text-muted">{t(`${baseKey}.answer` as TranslationKey)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
