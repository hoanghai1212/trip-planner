import { Provider } from '@/shared/constants/ProviderConst';

export interface IProduct {
  categoryId: string;
  name: string;
  description: string;
  oldMinPrice: number | null;
  oldMaxPrice: number | null;
  currentMinPrice: number;
  currentMaxPrice: number | null;
  discountRate: number | null;
  image: string;
  rating: number;
  provider: Provider;
  affiliateLink: string;
  productLink: string;
}

export interface IAffiliateService {
  getProductInfo(): Promise<IProduct>;
}
