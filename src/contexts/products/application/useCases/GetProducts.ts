import { Product } from '@core/products/entities/Product'
import { ProductsRepository } from '../interfaces/ProductsRepository'

export class GetProducts {
  private readonly repository: ProductsRepository

  constructor(repository: ProductsRepository) {
    this.repository = repository
  }

  execute(): Promise<Product[]> {
    return this.repository.findAll()
  }
}
