import { API_BASE_URL } from '@/lib/api/config';
import { ApiError, type ApiErrorBody } from '@/lib/api/errors';
import type { PaginationQuery } from '@/types/api/common';

export interface RequestOptions extends Omit<RequestInit, 'body'> {
  body?: unknown;
  query?: PaginationQuery | Record<string, string | number | boolean | undefined>;
}

function buildUrl(path: string, query?: RequestOptions['query']): string {
  const base = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = new URL(`${base}${normalizedPath}`, 'http://localhost');

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.set(key, String(value));
      }
    });
  }

  return `${base}${normalizedPath}${url.search}`;
}

async function parseErrorBody(response: Response): Promise<ApiErrorBody | undefined> {
  const contentType = response.headers.get('content-type') ?? '';

  if (!contentType.includes('application/json')) {
    return undefined;
  }

  try {
    return (await response.json()) as ApiErrorBody;
  } catch {
    return undefined;
  }
}

async function parseJson<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type') ?? '';

  if (response.status === 204 || !contentType.includes('application/json')) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { body, query, headers, ...init } = options;
  const url = buildUrl(path, query);

  let response: Response;

  try {
    response = await fetch(url, {
      ...init,
      headers: {
        Accept: 'application/json',
        ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
        ...headers,
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new ApiError(
      0,
      'Unable to reach the API server. Ensure the backend is running and API_PROXY_URL is correct.',
    );
  }

  if (!response.ok) {
    const errorBody = await parseErrorBody(response);
    const message =
      errorBody?.message ??
      errorBody?.error ??
      `Request failed with status ${response.status}`;

    throw new ApiError(response.status, message, errorBody);
  }

  return parseJson<T>(response);
}

export const apiClient = {
  get: <T>(path: string, options?: Omit<RequestOptions, 'body' | 'method'>) =>
    request<T>(path, { ...options, method: 'GET' }),

  post: <T>(path: string, body?: unknown, options?: Omit<RequestOptions, 'body' | 'method'>) =>
    request<T>(path, { ...options, method: 'POST', body }),

  put: <T>(path: string, body?: unknown, options?: Omit<RequestOptions, 'body' | 'method'>) =>
    request<T>(path, { ...options, method: 'PUT', body }),

  patch: <T>(path: string, body?: unknown, options?: Omit<RequestOptions, 'body' | 'method'>) =>
    request<T>(path, { ...options, method: 'PATCH', body }),

  delete: <T>(path: string, options?: Omit<RequestOptions, 'body' | 'method'>) =>
    request<T>(path, { ...options, method: 'DELETE' }),
};
