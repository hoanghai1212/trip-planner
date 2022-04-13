import { HttpService } from './HttpService';
import EndpointConst from '../constants/EndpointConst';
import {
  ICategory,
  ICategoryCreatedDto,
  ICategoryCreateDto,
  ICategoryUpdatedDto,
  ICategoryUpdateDto,
  IProduct,
  IProductCreatedDto,
  IProductCreateDto,
  IProductInfoDto,
  IProductSortOption,
  IProductUpdatedDto,
  IProductUpdateDto,
} from '../interfaces/services/IAffiliateService';
import { ICategoryInfoDto, ICategorySortOption, IProductSeedInfoDto } from '../interfaces/services/IAffiliateService';
import { PagedDataDto, PaginationOptions } from '../interfaces/services/ICommon';
import { paginationOptionsBuilder } from '../utils/serviceUtils';

export class AffiliateService {
  private static instance: AffiliateService;
  private httpService: HttpService;

  constructor() {
    this.httpService = HttpService.getInstance();
  }

  public static getInstance(): AffiliateService {
    if (!AffiliateService.instance) {
      AffiliateService.instance = new AffiliateService();
    }

    return AffiliateService.instance;
  }

  public async getProductSeed(productLink: string) {
    const productSeedInfoDto = await this.httpService.get<IProductSeedInfoDto>(
      `${EndpointConst.affiliate.getProductSeed}/${productLink}`,
      {
        credentials: true,
      }
    );

    return productSeedInfoDto;
  }

  public async getCategories(options?: PaginationOptions<ICategorySortOption>) {
    const categories = await this.httpService.get<PagedDataDto<ICategoryInfoDto>>(
      `${EndpointConst.affiliate.categories}${paginationOptionsBuilder<ICategorySortOption>(options)}`
    );

    return categories;
  }

  public async createCategory(categoryCreateDto: ICategoryCreateDto) {
    const createdCategory = await this.httpService.post<ICategoryCreateDto, ICategoryCreatedDto>(
      `${EndpointConst.affiliate.categories}`,
      categoryCreateDto,
      {
        credentials: true,
      }
    );

    return createdCategory;
  }

  public async updateCategory(categoryId: ICategory['id'], categoryUpdateDto: ICategoryUpdateDto) {
    const updatedCategory = await this.httpService.put<ICategoryUpdateDto, ICategoryUpdatedDto>(
      `${EndpointConst.affiliate.categories}/${categoryId}`,
      categoryUpdateDto,
      {
        credentials: true,
      }
    );

    return updatedCategory;
  }

  public async deleteCategory(categoryId: ICategory['id']): Promise<void> {
    await this.httpService.delete<void>(`${EndpointConst.affiliate.categories}/${categoryId}`, {
      credentials: true,
    });
  }

  public async getProducts(options?: PaginationOptions<IProductSortOption>) {
    const products = await this.httpService.get<PagedDataDto<IProductInfoDto>>(
      `${EndpointConst.affiliate.categories}${paginationOptionsBuilder<IProductSortOption>(options)}`
    );

    return products;
  }

  public async createProduct(productCreateDto: IProductCreateDto) {
    const createdProduct = await this.httpService.post<IProductCreateDto, IProductCreatedDto>(
      `${EndpointConst.affiliate.products}`,
      productCreateDto,
      {
        credentials: true,
      }
    );

    return createdProduct;
  }

  public async getProduct(productId: IProduct['id']) {
    const product = await this.httpService.get<IProduct>(`${EndpointConst.affiliate.products}/${productId}`);

    return product;
  }

  public async updateProduct(productId: IProduct['id'], productUpdateDto: IProductUpdateDto) {
    const updatedProduct = await this.httpService.put<IProductUpdateDto, IProductUpdatedDto>(
      `${EndpointConst.affiliate.products}/${productId}`,
      productUpdateDto,
      {
        credentials: true,
      }
    );

    return updatedProduct;
  }

  public async deleteProduct(productId: IProduct['id']) {
    await this.httpService.delete<void>(`${EndpointConst.affiliate.products}/${productId}`, {
      credentials: true,
    });
  }
}
