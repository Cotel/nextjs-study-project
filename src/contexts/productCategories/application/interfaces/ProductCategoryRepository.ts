import { ProductCategory } from '@core/productCategories/entities/ProductCategory'

export interface ProductCategoryRepository {
  findAll(): Promise<ProductCategory[]>
}
