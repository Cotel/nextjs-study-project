import { Product } from '@core/products/entities/Product'

export interface ProductsRepository {
  findAll(): Promise<Product[]>
}
