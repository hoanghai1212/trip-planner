import { Provider } from '@/shared/constants/ProviderConst';

import { SortOptions } from './ICommon';

export interface IProductSeedInfoDto {
  name: string;
  description: string;
  oldMinPrice: number | null;
  oldMaxPrice: number | null;
  currentMinPrice: number;
  currentMaxPrice: number | null;
  discountRate: number | null;
  image: string;
  rating: number;
  provider: string;
  affiliateLink: string;
  productLink: string;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface ICategoryInfoDto {
  id: ICategory['id'];
  name: ICategory['name'];
}

export interface ICategorySortOption {
  name: SortOptions;
}

export interface ICategoryCreateDto {
  name: ICategory['name'];
}

export interface ICategoryCreatedDto {
  id: ICategory['id'];
  name: ICategory['name'];
}

export interface ICategoryUpdateDto {
  name: ICategory['name'];
}

export interface ICategoryUpdatedDto {
  id: ICategory['id'];
}

export interface IProduct {
  id: string;
  name: string;
  description: string | null;
  oldMinPrice: number | null;
  oldMaxPrice: number | null;
  currentMinPrice: number;
  currentMaxPrice: number | null;
  discountRate: number | null;
  image: string | null;
  rating: number;
  provider: Provider;
  affiliateLink: string;
  productLink: string;
  category: ICategoryInfoDto;
  categoryId: string;
}
export interface IProductSortOption {
  name: SortOptions;
  oldMinPrice: SortOptions;
  oldMaxPrice: SortOptions;
  currentMinPrice: SortOptions;
  currentMaxPrice: SortOptions;
  discountRate: SortOptions;
  rating: SortOptions;
  provider: SortOptions;
}

export type IProductInfoDto = Omit<IProduct, 'categoryId'>;

export type IProductCreateDto = Omit<IProduct, 'id' | 'category'>;

export interface IProductCreatedDto {
  id: IProduct['id'];
}

export type IProductUpdateDto = Omit<IProduct, 'id' | 'category' | 'provider' | 'productLink'>;

export interface IProductUpdatedDto {
  id: IProduct['id'];
}
