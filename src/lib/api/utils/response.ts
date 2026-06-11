export function unwrapList<T>(response: unknown): T[] {
  if (Array.isArray(response)) return response;

  if (response && typeof response === 'object') {
    const record = response as Record<string, unknown>;
    const candidates = ['data', 'projects', 'team', 'members', 'items', 'results'];

    for (const key of candidates) {
      if (Array.isArray(record[key])) {
        return record[key] as T[];
      }
    }
  }

  return [];
}

export function unwrapItem<T>(response: unknown): T {
  if (response && typeof response === 'object' && 'data' in response) {
    return (response as { data: T }).data;
  }

  return response as T;
}
