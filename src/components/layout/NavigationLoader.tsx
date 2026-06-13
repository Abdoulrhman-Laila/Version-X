'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import PageLoader from '@/components/ui/PageLoader';

function isInternalNavigation(href: string, pathname: string): boolean {
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return false;
  }

  if (href.startsWith('http://') || href.startsWith('https://')) {
    return false;
  }

  const targetPath = href.split(/[?#]/)[0];
  const currentPath = pathname.split(/[?#]/)[0];

  return targetPath !== currentPath;
}

export default function NavigationLoader() {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressTimerRef = useRef<number | null>(null);

  const clearProgressTimer = useCallback(() => {
    if (progressTimerRef.current !== null) {
      window.clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
  }, []);

  const startNavigation = useCallback(() => {
    clearProgressTimer();
    setIsNavigating(true);
    setProgress(12);

    progressTimerRef.current = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 88) return current;
        return current + Math.random() * 10;
      });
    }, 180);
  }, [clearProgressTimer]);

  const finishNavigation = useCallback(() => {
    clearProgressTimer();
    setProgress(100);

    window.setTimeout(() => {
      setIsNavigating(false);
      setProgress(0);
    }, 280);
  }, [clearProgressTimer]);

  useEffect(() => {
    finishNavigation();
  }, [pathname, finishNavigation]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const anchor = (event.target as HTMLElement).closest('a');
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) {
        return;
      }

      const href = anchor.getAttribute('href');
      if (!href || !isInternalNavigation(href, pathname)) {
        return;
      }

      startNavigation();
    };

    const handlePopState = () => {
      startNavigation();
    };

    document.addEventListener('click', handleClick, true);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleClick, true);
      window.removeEventListener('popstate', handlePopState);
      clearProgressTimer();
    };
  }, [pathname, startNavigation, clearProgressTimer]);

  return (
    <>
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left gradient-bg shadow-[0_0_12px_rgba(24,199,255,0.45)]"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: progress / 100, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 bottom-0 z-40 bg-background/80 backdrop-blur-sm"
          >
            <PageLoader />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
