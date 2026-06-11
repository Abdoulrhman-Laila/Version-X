'use client';

import { AlertCircle, RefreshCw } from 'lucide-react';

interface ApiErrorStateProps {
  message: string;
  onRetry?: () => void;
  retryLabel?: string;
}

export default function ApiErrorState({ message, onRetry, retryLabel = 'Try again' }: ApiErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <div className="flex items-start gap-3 rounded-2xl border border-danger/30 bg-danger/10 px-5 py-4 text-sm text-danger">
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
        <p className="max-w-md text-left">{message}</p>
      </div>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="hover-lift inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary-400"
        >
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          {retryLabel}
        </button>
      )}
    </div>
  );
}
