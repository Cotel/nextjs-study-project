'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '../../atoms/Button/Button'
import styles from './ProductCategorySelector.module.scss'
import { ProductCategory } from '@core/productCategories/entities/ProductCategory'
import { InMemoryProductCategoryRepository } from '@infra/productCategories/InMemoryProductCategoryRepository'

export const ProductCategorySelector = () => {
  const [categories, setCategories] = useState<ProductCategory[]>([])

  useEffect(() => {
    const repository = new InMemoryProductCategoryRepository()

    repository.findAll().then((categories) => {
      setCategories(categories)
    })
  }, [])

  return (
    <div className={styles['product-category-selector']}>
      {categories.map((category) => (
        <Button key={category.id} variant="outline">
          {category.name}
        </Button>
      ))}
    </div>
  )
}
