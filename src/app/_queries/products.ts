import { ProductCriteria } from '@core/products/entities/ProductsCriteria'
import { useCases } from '@infra/di/usecases'

export const getProducts = async (criteria?: ProductCriteria) => {
  const useCase = useCases.getProducts
  const result = await useCase.execute(criteria)

  return result
}
