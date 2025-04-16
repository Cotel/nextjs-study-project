'use client'

import { Product } from '@core/products/entities/Product'
import { ProductListItem } from '../ProductListItem/ProductListItem'
import styles from './ProductList.module.scss'

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className={styles['product-list']}>
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          productId={product.id}
          imageUrl={product.imageUrl}
          price={product.price.toString()}
          title={product.title}
        />
      ))}
    </div>
  )
}
