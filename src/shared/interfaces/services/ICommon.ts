export type SortOptions = 'asc' | 'desc';

export interface PaginationOptions<T> {
  page?: number;
  perPage?: number;
  orderBy?: T;
}

export interface PagedDataDto<T> {
  itemCount: number;
  perPage: number;
  pageCount: number;
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  items: T[];
}
