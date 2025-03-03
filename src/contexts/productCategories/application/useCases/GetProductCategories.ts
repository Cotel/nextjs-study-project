import { ProductCategory } from '@core/productCategories/entities/ProductCategory'
import { ProductCategoryRepository } from '../interfaces/ProductCategoryRepository'

export const makeGetProductCategories =
  (repository: ProductCategoryRepository) => () => {
    return repository.findAll()
  }
