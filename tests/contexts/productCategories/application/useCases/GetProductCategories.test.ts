import { makeGetProductCategories } from '@core/productCategories/application/useCases/GetProductCategories'
import { InMemoryProductCategoryRepository } from '../../../../../src/infra/productCategories/InMemoryProductCategoryRepository'

describe('Use Case - Get Product Categories', () => {
  it('should return all available categories', async () => {
    const stubRepository = new InMemoryProductCategoryRepository()

    const useCase = makeGetProductCategories(stubRepository)

    const categories = await useCase()

    expect(categories.length).toBe(2)
  })
})
