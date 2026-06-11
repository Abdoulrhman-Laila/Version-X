import { apiClient } from '@/lib/api/client';
import { API_ENDPOINTS } from '@/lib/api/config';
import {
  mapContactFormToPayload,
  type ContactFormSubmitInput,
} from '@/lib/api/mappers/contact';
import type { ApiMessageResponse } from '@/types/api/common';

export async function submitContactForm(
  input: ContactFormSubmitInput,
): Promise<ApiMessageResponse> {
  const payload = mapContactFormToPayload(input);
  return apiClient.post<ApiMessageResponse>(API_ENDPOINTS.contact, payload);
}
