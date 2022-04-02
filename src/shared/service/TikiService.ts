import { Provider } from '../constants/ProviderConst';
import {
  IAffiliateService,
  IProduct,
} from '../interfaces/services/IAffiliateService';

export class TikiService implements IAffiliateService {
  private baseUrl = 'https://tiki.vn/api/v2/products';
  private uri: string;
  private SPID_REGEXP = new RegExp('spid=[0-9]*');

  constructor(uri: string) {
    this.uri = uri;
  }

  async getProductInfo(): Promise<IProduct> {
    const requestUrl = this.createRequestUrl();

    const product = {} as IProduct;

    try {
      const response = await fetch(requestUrl);

      const data = await response.json();

      product.categoryId = 'tiki';
      product.name = data.name;
      product.description = data.description;
      product.currentMinPrice = +data.price;
      product.discountRate = data.discount_rate / 100;
      product.image =
        data.images?.[0].base_url ||
        data.images?.[0].large_url ||
        data.images?.[0].medium_url ||
        data.images?.[0].small_url;
      product.rating = data.rating_average;
      product.provider = Provider.Tiki;

      return product;
    } catch {
      throw new Error('Failed to get product info');
    }
  }

  private createRequestUrl(): string {
    const productId = this.uri?.split('.')?.[1]?.split('-')?.pop()?.slice(1);

    const spid = this.uri?.match(this.SPID_REGEXP);

    if (!productId || !spid) {
      throw new Error('Invalid product url');
    }

    return `${this.baseUrl}/${productId}?platform=web&spid=${spid}`;
  }
}
