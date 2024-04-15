import { injectable, inject } from "inversify";
import { TYPES } from "../../types";
import { Product } from "../../models/product.model";
import { Repositories } from "../../dataAccess/repositories";
import { ProductService } from "../product.service";

@injectable()
export class ProductServiceImpl implements ProductService {
  constructor(
    @inject(TYPES.Repositories)
    private repo: Repositories
  ) {}

  async createProduct(req: any): Promise<any> {
    const data: Product = req.body;
    return await this.repo.products.create(data);
  }

  async getProducts(req: any): Promise<any> {
    const res: any = await this.repo.products.get(req);
    const products: Product[] = res.data;

    return { products, ...res.page_info };
  }
}
