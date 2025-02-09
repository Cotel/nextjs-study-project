import { Manufacturer } from './Manufacturer'

export interface ManufacturerRepository {
  findAll(): Promise<Manufacturer[]>
}
