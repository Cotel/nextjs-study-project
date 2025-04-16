import { ProductCategory } from '@core/productCategories/entities/ProductCategory'
import { RadioGroup } from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import { getProductCategories } from '../../../../_queries/productsCategories'
import styles from './ProductCategorySelector.module.scss' // Asegúrate de ajustar la ruta

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
    <RadioGroup.Root
      className={styles['radio-group']}
      onValueChange={setSelectedCategory}
      defaultValue={ALL_PRODUCT_CATEGORIES}
    >
      <RadioGroup.Item value={ALL_PRODUCT_CATEGORIES}>All</RadioGroup.Item>

      {categories.map((category) => (
        <RadioGroup.Item key={category.id} value={category.id}>
          {category.name}
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  )
}
