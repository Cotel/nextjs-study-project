import { ProductsRepository } from '@core/products/application/interfaces/ProductsRepository'
import { Product } from '@core/products/entities/Product'
import { checkProductSellingStatus } from '@core/products/entities/ProductSellingStatus'
import {
  ProductStatus,
  checkProductStatus,
} from '@core/products/entities/ProductStatus'
import { db } from '@infra/drizzle/db'
import { productTable } from '@infra/drizzle/schema'
import { Money } from 'ts-money'

export class DrizzleProductsRepository implements ProductsRepository {
  async findAll(): Promise<Product[]> {
    const dbProducts = await db.select().from(productTable)

    return dbProducts.map((dbProduct): Product => {
      const status = dbProduct.status
      if (!checkProductStatus(status)) {
        throw new Error("Couldn't parse status")
      }

      const sellingStatus = dbProduct.sellingStatus
      if (!checkProductSellingStatus(sellingStatus))
        throw new Error("Couldn't parse selling status")

      return {
        id: dbProduct.id,
        imageUrl: dbProduct.imageUrl,
        price: new Money(dbProduct.priceAmount, dbProduct.priceCurrency),
        title: dbProduct.title,
        status: status,
        details: dbProduct.details,
        productCategoryId: dbProduct.productCategoryId,
        sellingStatus: sellingStatus,
        sellerId: dbProduct.sellerId,
      }
    })
  }
}
