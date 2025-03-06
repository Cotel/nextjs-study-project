import { ProductCategory } from '@core/productCategories/entities/ProductCategory'
import { ProductCategoryRepository } from '../interfaces/ProductCategoryRepository'

export class GetProductCategories {
  private readonly repository: ProductCategoryRepository

  constructor(repository: ProductCategoryRepository) {
    this.repository = repository
  }

  execute(): Promise<ProductCategory[]> {
    return this.repository.findAll()
  }
}
