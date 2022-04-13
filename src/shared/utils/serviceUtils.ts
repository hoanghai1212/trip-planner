import { PaginationOptions } from '../interfaces/services/ICommon';

export function paginationOptionsBuilder<T>(options?: PaginationOptions<T>): string {
  if (!options) return '';

  const { page, perPage, orderBy } = options;

  const result = [];

  page && result.push(`page=${page}`);

  perPage && result.push(`perPage=${perPage}`);

  orderBy && result.push(`orderBy=${JSON.stringify(orderBy)}`);

  return result.length ? `?${result.join('&').trim()}` : '';
}
