import { Provider } from '../constants/ProviderConst';
import {
  IAffiliateService,
  IProduct,
} from '../interfaces/services/IAffiliateService';

export class ShopeeService implements IAffiliateService {
  private baseUrl = 'https://shopee.vn/api/v4';
  private uri: string;
  constructor(uri: string) {
    this.uri = uri;
  }

  async getProductInfo(): Promise<IProduct> {
    const product = {} as IProduct;
    product.provider = Provider.Shopee;
    product.productLink = this.uri;
    try {
      const uriParts = this.uri.split('.');
      if (uriParts.length < 4) {
        return product;
      }

      const shopId = uriParts[2];
      const itemId = uriParts[3].split('?')[0];
      const requestUrl = `https://cors-anywhere.herokuapp.com/${this.baseUrl}/item/get?itemid=${itemId}&shopid=${shopId}`;
      const response = await fetch(requestUrl);
      const { data, error } = await response.json();
      if (error) {
        // console.error(error);
        return product;
      }

      product.oldMinPrice = data.price_min_before_discount
        ? data.price_min_before_discount / 100000
        : null;
      product.oldMaxPrice = data.price_max_before_discount
        ? data.price_max_before_discount / 100000
        : null;
      product.currentMinPrice = data.price / 100000;
      product.currentMaxPrice = data.price_max ? data.price_max / 100000 : null;
      product.description = data.description;
      product.discountRate = +data.discount.replace('$', '') / 100;
      product.rating = data.item_rating.rating_star;
      return product;
    } catch {
      // console.error("Error while fetching product information for shopee", err);
      return product;
    }
  }
}
