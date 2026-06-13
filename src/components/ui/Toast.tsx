'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  closeLabel: string;
  duration?: number;
}

export default function Toast({ message, isOpen, onClose, closeLabel, duration = 5000 }: ToastProps) {
  useEffect(() => {
    if (!isOpen) return;

    const timer = window.setTimeout(onClose, duration);
    return () => window.clearTimeout(timer);
  }, [isOpen, duration, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 left-1/2 z-50 flex w-[min(100%-2rem,28rem)] -translate-x-1/2 items-start gap-3 rounded-2xl border border-success/30 bg-success/10 px-5 py-4 text-success shadow-lg backdrop-blur-sm"
        >
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <p className="flex-1 text-sm font-medium leading-relaxed">{message}</p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 transition-colors hover:bg-success/15"
            aria-label={closeLabel}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
