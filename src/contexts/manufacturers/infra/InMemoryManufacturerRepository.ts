import { Manufacturer } from '../domain/Manufacturer'
import { ManufacturerRepository } from '../domain/ManufacturerRepository'

export class ManufacturerRepositoryImpl implements ManufacturerRepository {
  private manufacturers: Record<string, Manufacturer> = {
    sony: { id: 'sony', name: 'Sony' },
    nintendo: { id: 'nintendo', name: 'Nintendo' },
    microsoft: { id: 'microsoft', name: 'Microsoft' },
  }

  async findAll(): Promise<Manufacturer[]> {
    return Object.values(this.manufacturers)
  }
}
