'use client'

import { Product } from '@core/products/entities/Product'
import { ProductCriteria } from '@core/products/entities/ProductsCriteria'
import { Uuid } from '@core/shared/entities/Uuid'
import { Flex } from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import { getProducts } from '../../../../_queries/products'
import {
  ALL_PRODUCT_CATEGORIES,
  ProductCategorySelector,
} from '../../molecules/ProductCategorySelector/ProductCategorySelector'
import { SearchBar } from '../../molecules/SearchBar/SearchBar'
import { ProductList } from '../ProductList/ProductList'

export const ProductListContainer = () => {
  const [criteria, setCriteria] = useState<ProductCriteria>({})
  const [products, setProducts] = useState<Product[]>([])

  const onTitleInputChanged = (input: string) => {
    setCriteria((prev) => ({
      ...prev,
      title: input,
    }))
  }

  const onCategoryChanged = (
    categoryId: Uuid | typeof ALL_PRODUCT_CATEGORIES,
  ) => {
    setCriteria((prev) => ({
      ...prev,
      categoryId:
        categoryId === ALL_PRODUCT_CATEGORIES ? undefined : categoryId,
    }))
  }

  useEffect(() => {
    getProducts(criteria).then((result) => setProducts(result))
  }, [criteria])

  return (
    <Flex direction="column" gap="4">
      <Flex direction="column" gap="2">
        <SearchBar setSearchQuery={onTitleInputChanged} />
        <ProductCategorySelector setSelectedCategory={onCategoryChanged} />
      </Flex>

      <ProductList products={products} />
    </Flex>
  )
}
