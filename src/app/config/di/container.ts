import { GetVideogameConsoles } from '@/consoles/application/GetVideogameConsoles'
import { InMemoryVideogameConsoleRepository } from '@/consoles/infra/InMemoryVideogameConsoleRepository'
import { GetAllManufacturers } from '@/manufacturers/application/GetAllManufacturers'
import { InMemoryManufacturerRepository } from '@/manufacturers/infra/InMemoryManufacturerRepository'
import { drizzle } from 'drizzle-orm/node-postgres'

export const databaseConnection = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL!,
    ssl: true,
  },
})

/*const manufacturersRepository = new DrizzleManufacturerRepository(
  databaseConnection,
)*/
const manufacturersRepository = new InMemoryManufacturerRepository()
const videoConsolesRepository = new InMemoryVideogameConsoleRepository()

const getAllManufacturers = new GetAllManufacturers(manufacturersRepository)
const getVideogameConsoles = new GetVideogameConsoles(videoConsolesRepository)

export { getAllManufacturers, getVideogameConsoles }
