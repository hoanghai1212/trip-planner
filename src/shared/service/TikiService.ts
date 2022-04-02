import {
  IAffiliateService,
  IProduct,
} from '../interfaces/services/IAffiliateService';

export class TikiService implements IAffiliateService {
  async getProductInfo(uri: string): Promise<IProduct> {
    throw new Error('Method not implemented.' + uri);
  }
}
