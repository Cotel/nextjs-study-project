import { Manufacturer } from '@/manufacturers/domain/Manufacturer'
import { ManufacturerRepository } from '@/manufacturers/domain/ManufacturerRepository'
import { NodePgDatabase } from 'drizzle-orm/node-postgres'
import { manufacturers } from '../../../app/config/database/schemas/manufacturers'

export class DrizzleManufacturerRepository implements ManufacturerRepository {
  constructor(private readonly databaseConnection: NodePgDatabase) {}

  async findAll(): Promise<Manufacturer[]> {
    const result = await this.databaseConnection.select().from(manufacturers)

    return result.map((row) => ({
      id: row.id,
      name: row.name,
    }))
  }
}
