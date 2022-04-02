export interface IProduct {
  categoryId: string;
  name: string;
  description: string;
  oldMinPrice: number;
  oldMaxPrice: number;
  currentMinPrice: number;
  currentMaxPrice: number;
  discountRate: number;
  image: string;
  rating: number;
  provider: string;
}

export interface IAffiliateService {
  getProductInfo(uri: string): Promise<IProduct>;
}
