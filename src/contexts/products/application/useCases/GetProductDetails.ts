import { Uuid } from "@core/shared/entities/Uuid";
import { Product } from "@core/products/entities/Product";
import { ProductsRepository } from "../interfaces/ProductsRepository";

export class GetProductDetails {
  private readonly repository: ProductsRepository

  constructor(repository: ProductsRepository) {
    this.repository = repository
  }

  execute(id:Uuid): Promise<Product|undefined> {
    return this.repository.findById(id)
  }
}
