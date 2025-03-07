import { GetProductCategories } from '@core/productCategories/application/useCases/GetProductCategories'
import { InMemoryProductCategoryRepository } from '../../../../../src/infra/productCategories/InMemoryProductCategoryRepository'

describe('Use Case - Get Product Categories', () => {
  it('should return all available categories', async () => {
    const stubRepository = new InMemoryProductCategoryRepository()

    const useCase = new GetProductCategories(stubRepository)

    const categories = await useCase.execute()

    expect(categories.length).toBe(2)
  })

  it('should return empty array if no categories in persistence', async () => {
    const stubRepository = new InMemoryProductCategoryRepository({})

    const useCase = new GetProductCategories(stubRepository)

    const categories = await useCase.execute()

    expect(categories.length).toBe(0)
  })
})
