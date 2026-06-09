'use client';

import { motion } from 'framer-motion';

import AnimatedCounter from '@/components/home/AnimatedCounter';
import { teamStats } from '@/data/team';
import { useTranslation } from '@/hooks/useTranslation';
import type { TranslationKey } from '@/i18n/translate';

export default function TeamStats() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <p className="gradient-text text-4xl font-bold sm:text-5xl">
                <AnimatedCounter stat={stat} />
              </p>
              <p className="mt-2 text-sm font-medium text-muted">
                {t(`team.stats.${stat.id}` as TranslationKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
