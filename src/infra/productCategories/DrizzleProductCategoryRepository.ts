import { ProductCategoryRepository } from '@core/productCategories/application/interfaces/ProductCategoryRepository'
import { ProductCategory } from '@core/productCategories/entities/ProductCategory'
import { NodePgDatabase } from 'drizzle-orm/node-postgres'
import { productCategoryTable } from '../drizzle/schema'

export class DrizzleProductCategoryRepository
  implements ProductCategoryRepository
{
  constructor(private readonly db: NodePgDatabase) {}

  findAll(): Promise<ProductCategory[]> {
    return this.db.select().from(productCategoryTable)
  }
}
