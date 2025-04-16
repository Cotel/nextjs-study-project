import { Product } from '@core/products/entities/Product'
import { ProductCriteria } from '@core/products/entities/ProductsCriteria'
import { Uuid } from '@core/shared/entities/Uuid'

export interface ProductsRepository {
  findAll(criteria?: ProductCriteria): Promise<Product[]>
  findById(id: Uuid): Promise<Product | undefined>
}
