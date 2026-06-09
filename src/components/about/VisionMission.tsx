'use client';

import { motion } from 'framer-motion';

import { visionMissionItems } from '@/data/about';
import { useTranslation } from '@/hooks/useTranslation';
import type { TranslationKey } from '@/i18n/translate';

export default function VisionMission() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-2">
          {visionMissionItems.map((item, index) => {
            const Icon = item.icon;
            const baseKey = `about.visionMission.${item.id}` as TranslationKey;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass card-glow rounded-3xl p-8 sm:p-10"
              >
                <div className="gradient-bg mb-6 inline-flex rounded-2xl p-3.5 text-white shadow-lg shadow-primary-500/20">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{t(`${baseKey}.title` as TranslationKey)}</h3>
                <p className="mt-4 leading-relaxed text-muted">{t(`${baseKey}.description` as TranslationKey)}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
