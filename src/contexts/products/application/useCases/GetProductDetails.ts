import { Product } from '@core/products/entities/Product'
import { Uuid } from '@core/shared/entities/Uuid'
import { ProductsRepository } from '../interfaces/ProductsRepository'

export class GetProductDetails {
  private readonly repository: ProductsRepository

  constructor(repository: ProductsRepository) {
    this.repository = repository
  }

  execute(id: Uuid): Promise<Product | undefined> {
    return this.repository.findById(id)
  }
}
