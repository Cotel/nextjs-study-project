'use client'
import React, { useEffect, useState } from 'react'
import { ProductListItem } from '../ProductListItem/ProductListItem'
import styles from './ProductList.module.scss'
import { InMemoryProductsRepository } from '@infra/products/InMemoryProductsRepository'
import { Product } from '@core/products/entities/Product'


export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(()=> {
    const repository = new InMemoryProductsRepository()

    repository.findAll().then((products) => {
      setProducts(products)
    })
  }, [])

  return (
    <div className={styles['product-list']}>
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          imageUrl={product.imageUrl}
          price={product.price.toString()} 
          title={product.title}
        />
      ))}
    </div>
  );
}
