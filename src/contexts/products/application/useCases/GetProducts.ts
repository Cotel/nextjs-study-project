import { Product } from '@core/products/entities/Product'
import { ProductCriteria } from '@core/products/entities/ProductsCriteria'
import { ProductsRepository } from '../interfaces/ProductsRepository'

export class GetProducts {
  private readonly repository: ProductsRepository

  constructor(repository: ProductsRepository) {
    this.repository = repository
  }

  execute(criteria?: ProductCriteria): Promise<Product[]> {
    return this.repository.findAll(criteria)
  }
}
