import { Manufacturer } from '../domain/Manufacturer'
import { ManufacturerRepository } from '../domain/ManufacturerRepository'

export class GetAllManufacturers {
  constructor(private readonly repository: ManufacturerRepository) {}

  execute(): Promise<Manufacturer[]> {
    return this.repository.findAll()
  }
}
