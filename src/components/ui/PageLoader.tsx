'use client';

import { motion } from 'framer-motion';

import { useTranslation } from '@/hooks/useTranslation';

interface PageLoaderProps {
  className?: string;
}

export default function PageLoader({ className = '' }: PageLoaderProps) {
  const { t } = useTranslation();

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={`flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center gap-8 px-6 ${className}`}
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary-500/15"
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-transparent border-t-accent border-r-primary-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute inset-5 rounded-full border-2 border-transparent border-b-secondary-500 border-l-primary-400"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
          aria-hidden="true"
        />
        <motion.div
          className="h-3 w-3 rounded-full gradient-bg shadow-lg shadow-primary-500/40"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
      </div>

      <div className="text-center">
        <p className="gradient-text text-xl font-bold tracking-tight sm:text-2xl">{t('common.brandName')}</p>
        <p className="mt-3 text-sm font-medium text-muted">{t('common.loading')}</p>
        <div className="mt-4 flex items-center justify-center gap-1.5" aria-hidden="true">
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-primary-500"
              animate={{ opacity: [0.25, 1, 0.25], y: [0, -4, 0] }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
