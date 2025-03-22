import { Product } from '@core/products/entities/Product'
import { Uuid } from '@core/shared/entities/Uuid'

export interface ProductsRepository {
  findAll(): Promise<Product[]>
  findById(id: Uuid): Promise<Product | undefined>
}
