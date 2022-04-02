import { IAffiliateService } from '../interfaces/services/IAffiliateService';
import { LazadaService } from '../service/LazadaService';
import { ShopeeService } from '../service/ShopeeService';
import { TikiService } from '../service/TikiService';

export class AffiliateServiceFactory {
  public static getAffiliateService(uri: string): IAffiliateService {
    const domain = uri.split('/')[2];
    switch (domain) {
      case 'tiki.vn':
        return new TikiService();
      case 'lazada.vn':
        return new LazadaService();
      case 'shopee.vn':
        return new ShopeeService();
      default:
        throw new Error('Unknown affiliate service');
    }
  }
}
