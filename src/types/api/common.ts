export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginationQuery {
  page?: number;
  limit?: number;
}

export interface ApiListResponse<T> {
  data: T[];
  pagination?: PaginationMeta;
}

export interface ApiItemResponse<T> {
  data: T;
  message?: string;
}

export interface ApiMessageResponse {
  success?: boolean;
  message: string;
  data?: unknown;
}
