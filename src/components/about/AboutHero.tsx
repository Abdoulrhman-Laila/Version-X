'use client';

import { motion } from 'framer-motion';

import { useTranslation } from '@/hooks/useTranslation';

const orbs = [
  { size: 'w-64 h-64', color: 'bg-accent/25', position: 'top-[-4rem] right-[-3rem]', duration: 20 },
  { size: 'w-80 h-80', color: 'bg-primary-500/20', position: 'bottom-[-5rem] left-[-4rem]', duration: 18 },
  { size: 'w-56 h-56', color: 'bg-secondary-500/15', position: 'top-[40%] left-[45%]', duration: 22 },
];

export default function AboutHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-primary-900 py-24 sm:py-32">
      <div className="gradient-bg absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(24,199,255,0.14)_0%,_transparent_55%)]" aria-hidden="true" />

      {orbs.map((orb) => (
        <motion.div
          key={orb.position}
          className={`absolute ${orb.size} ${orb.color} ${orb.position} rounded-full blur-3xl`}
          animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
      ))}

      <div className="container-custom relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-accent uppercase backdrop-blur-sm">
            {t('about.hero.eyebrow')}
          </span>
          <h1 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{t('about.hero.title')}</h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">{t('about.hero.description')}</p>
        </motion.div>
      </div>
    </section>
  );
}
