export interface ApiErrorBody {
  message?: string;
  error?: string;
  errors?: Record<string, string[]>;
  code?: string;
}

export class ApiError extends Error {
  readonly status: number;
  readonly code?: string;
  readonly details?: ApiErrorBody;

  constructor(status: number, message: string, details?: ApiErrorBody) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = details?.code;
    this.details = details;
  }

  get validationErrors(): Record<string, string[]> | undefined {
    return this.details?.errors;
  }
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}

export function getErrorMessage(error: unknown, fallback = 'Something went wrong'): string {
  if (isApiError(error)) {
    if (error.status === 500) {
      return `${error.message} (HTTP 500 — server error on the backend)`;
    }
    if (error.status === 0) {
      return error.message;
    }
    return error.message;
  }
  if (error instanceof Error) return error.message;
  return fallback;
}
