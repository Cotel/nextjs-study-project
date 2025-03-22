import { Url } from '@core/shared/entities/Url'
import { Uuid } from '@core/shared/entities/Uuid'
import { Currencies, Money } from 'ts-money'
import { ProductSellingStatus } from './ProductSellingStatus'
import { ProductStatus } from './ProductStatus'

export type Product = {
  id: Uuid
  imageUrl: Url
  price: Money
  title: string
  status: ProductStatus
  details: string
  productCategoryId: Uuid
  sellingStatus: ProductSellingStatus
  sellerId: Uuid
}
