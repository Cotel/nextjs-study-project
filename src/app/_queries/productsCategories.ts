import { GetProductCategories } from "@core/productCategories/application/useCases/GetProductCategories"
import { repositories } from "@infra/di/repositories"

export const getProductCategories = () => {
  const repository = repositories.productCategories
  const useCase = new GetProductCategories(repository)
  return useCase.execute()
}
