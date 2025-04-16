import { ProductCategoryRepository } from '@core/productCategories/application/interfaces/ProductCategoryRepository'
import { ProductCategory } from '@core/productCategories/entities/ProductCategory'
import { generateUuid } from '@core/shared/entities/Uuid'

const DEFAULT_MEMORY: Record<string, ProductCategory> = {
  consoles: {
    id: '123e4567-e89b-12d3-a456-426614174001',
    name: 'Games',
  },

  videogames: {
    id: '223e4567-e89b-12d3-a456-426614174001',
    name: 'Consoles',
  },
  
}

export class InMemoryProductCategoryRepository implements ProductCategoryRepository {
  private memory: Record<string, ProductCategory>

  constructor(memory: Record<string, ProductCategory> = DEFAULT_MEMORY) {
    this.memory = memory
  }

  findAll(): Promise<ProductCategory[]> {
    return Promise.resolve(Object.values(this.memory))
  }
}
