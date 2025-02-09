import { GetAllManufacturers } from '@/manufacturers/application/GetAllManufacturers'
import { InMemoryManufacturerRepository } from '@/manufacturers/infra/InMemoryManufacturerRepository'

describe('GetAllManufacturers', () => {
  let repository: InMemoryManufacturerRepository
  let useCase: GetAllManufacturers

  beforeEach(() => {
    // Usamos el repositorio real o una implementación en memoria
    repository = new InMemoryManufacturerRepository()
    useCase = new GetAllManufacturers(repository)
  })

  it('should return all manufacturers correctly', async () => {
    repository.setData({
      sony: { id: 'sony', name: 'Sony' },
      nintendo: { id: 'nintendo', name: 'Nintendo' },
      microsoft: { id: 'microsoft', name: 'Microsoft' },
    })

    const result = await useCase.execute()

    expect(result).toEqual([
      { id: 'sony', name: 'Sony' },
      { id: 'nintendo', name: 'Nintendo' },
      { id: 'microsoft', name: 'Microsoft' },
    ])
  })

  it('should handle an empty list correctly', async () => {
    // Inicializamos el repositorio con una lista vacía
    repository.setData({})

    const result = await useCase.execute()

    expect(result).toEqual([])
  })
})
