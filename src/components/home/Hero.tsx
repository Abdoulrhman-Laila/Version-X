'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

import { useTranslation } from '@/hooks/useTranslation';

const orbs = [
  {
    size: 'w-72 h-72',
    color: 'bg-accent/30',
    position: 'top-[-6rem] left-[-4rem]',
    duration: 18,
  },
  {
    size: 'w-96 h-96',
    color: 'bg-primary-500/25',
    position: 'top-[20%] right-[-8rem]',
    duration: 22,
  },
  {
    size: 'w-64 h-64',
    color: 'bg-secondary-500/20',
    position: 'bottom-[-4rem] left-[30%]',
    duration: 16,
  },
];

function TechIllustration() {
  return (
    <svg
      viewBox="0 0 480 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-lg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#18C7FF" />
          <stop offset="50%" stopColor="#005EFF" />
          <stop offset="100%" stopColor="#6A1BFF" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect
        x="40"
        y="60"
        width="400"
        height="280"
        rx="24"
        fill="rgba(255,255,255,0.04)"
        stroke="url(#hero-grad)"
        strokeWidth="1.5"
      />

      <rect x="60" y="80" width="360" height="36" rx="8" fill="rgba(24,199,255,0.12)" />
      <circle cx="80" cy="98" r="6" fill="#EF4444" />
      <circle cx="100" cy="98" r="6" fill="#F59E0B" />
      <circle cx="120" cy="98" r="6" fill="#10B981" />

      <rect x="60" y="130" width="160" height="100" rx="12" fill="rgba(0,94,255,0.15)" />
      <rect x="240" y="130" width="180" height="44" rx="10" fill="rgba(106,27,255,0.18)" />
      <rect x="240" y="186" width="180" height="44" rx="10" fill="rgba(24,199,255,0.12)" />

      <path
        d="M80 270 L160 230 L240 260 L320 210 L400 250"
        stroke="url(#hero-grad)"
        strokeWidth="3"
        strokeLinecap="round"
        filter="url(#glow)"
      />

      {[
        [80, 270],
        [160, 230],
        [240, 260],
        [320, 210],
        [400, 250],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="6" fill="#18C7FF" filter="url(#glow)" />
      ))}

      <motion.g
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <rect
          x="300"
          y="40"
          width="120"
          height="48"
          rx="12"
          fill="rgba(106,27,255,0.25)"
          stroke="#8A2EFF"
          strokeWidth="1"
        />
        <text x="318" y="70" fill="#E0EDFF" fontSize="13" fontFamily="system-ui">
          AI Ready
        </text>
      </motion.g>
    </svg>
  );
}

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-cta-surface">
      <div className="gradient-bg absolute inset-0 opacity-20" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(24,199,255,0.15)_0%,_transparent_60%)]"
        aria-hidden="true"
      />

      {orbs.map((orb) => (
        <motion.div
          key={orb.position}
          className={`absolute ${orb.size} ${orb.color} ${orb.position} rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
        />
      ))}

      <div className="container-custom relative z-10 grid items-center gap-12 py-32 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-accent uppercase backdrop-blur-sm">
            {t('home.hero.eyebrow')}
          </span>

          <h1 className="text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t('home.hero.title')}{' '}
            <span className="gradient-text">{t('home.hero.titleHighlight')}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            {t('home.hero.description')}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="hover-lift inline-flex items-center gap-2 rounded-xl bg-primary-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition-colors hover:bg-primary-400"
            >
              {t('home.hero.primaryCta')}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="hover-lift inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              {t('home.hero.secondaryCta')}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative hidden lg:block"
        >
          <div className="glass rounded-2xl p-6">
            <TechIllustration />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-white"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label={t('nav.services')}
      >
        <span className="text-xs tracking-widest uppercase">{t('common.scroll')}</span>
        <ChevronDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}
