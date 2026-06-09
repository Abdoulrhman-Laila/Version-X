'use client';

import { motion } from 'framer-motion';

import { useTranslation } from '@/hooks/useTranslation';

const orbs = [
  { size: 'w-72 h-72', color: 'bg-accent/25', position: 'top-[-4rem] left-[-3rem]', duration: 19 },
  { size: 'w-96 h-96', color: 'bg-secondary-500/15', position: 'top-[15%] right-[-5rem]', duration: 22 },
  { size: 'w-64 h-64', color: 'bg-primary-500/20', position: 'bottom-[-3rem] left-[40%]', duration: 17 },
];

export default function ServicesHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-primary-900 py-24 sm:py-32">
      <div className="gradient-bg absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(106,27,255,0.12)_0%,_transparent_55%)]" aria-hidden="true" />
      {orbs.map((orb) => (
        <motion.div key={orb.position} className={`absolute ${orb.size} ${orb.color} ${orb.position} rounded-full blur-3xl`} animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.65, 0.35] }} transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut' }} aria-hidden="true" />
      ))}
      <div className="container-custom relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-accent uppercase backdrop-blur-sm">{t('services.hero.eyebrow')}</span>
          <h1 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{t('services.hero.title')}</h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">{t('services.hero.description')}</p>
        </motion.div>
      </div>
    </section>
  );
}
