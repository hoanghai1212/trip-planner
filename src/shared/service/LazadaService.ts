import {
  IAffiliateService,
  IProduct,
} from '../interfaces/services/IAffiliateService';

export class LazadaService implements IAffiliateService {
  private uri: string;
  constructor(uri: string) {
    this.uri = uri;
  }
  async getProductInfo(): Promise<IProduct> {
    throw new Error('Method not implemented.' + this.uri);
  }
}
