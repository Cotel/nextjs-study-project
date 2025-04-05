import { ProductCategory } from '@core/productCategories/entities/ProductCategory'
import { Flex, RadioCards } from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import { getProductCategories } from '../../../../_queries/productsCategories'

export const ALL_PRODUCT_CATEGORIES = 'ALL'

interface ProductCategorySelectorProps {
  setSelectedCategory: (
    categoryId: string | typeof ALL_PRODUCT_CATEGORIES,
  ) => void
}

export const ProductCategorySelector = ({
  setSelectedCategory,
}: ProductCategorySelectorProps) => {
  const [categories, setCategories] = useState<ProductCategory[]>([])

  useEffect(() => {
    getProductCategories().then((result) => setCategories(result))
  }, [])

  return (
    <Flex direction="row">
      <RadioCards.Root
        onValueChange={setSelectedCategory}
        defaultValue={ALL_PRODUCT_CATEGORIES}
        columns={{ initial: '3' }}
        gap="2"
      >
        <RadioCards.Item value={ALL_PRODUCT_CATEGORIES}>All</RadioCards.Item>

        {categories.map((category) => (
          <RadioCards.Item key={category.id} value={category.id}>
            {category.name}
          </RadioCards.Item>
        ))}
      </RadioCards.Root>
    </Flex>
  )
}
