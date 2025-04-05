import { Url } from '@core/shared/entities/Url'
import { Uuid } from '@core/shared/entities/Uuid'
import { Money } from 'ts-money'
import { ProductSellingStatus } from './ProductSellingStatus'
import { ProductStatus } from './ProductStatus'

export type Product = {
  name: any
  category: any
  id: Uuid
  imageUrl: Url
  price: string
  title: string
  status: ProductStatus
  details: string
  productCategoryId: Uuid
  sellingStatus: ProductSellingStatus
  sellerId: Uuid
}
