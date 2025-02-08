import { VideogameConsole } from '../domain/VideogameConsole'
import { VideogameConsoleRepository } from '../domain/VideogameConsoleRepository'

export class InMemoryVideogameConsoleRepository
  implements VideogameConsoleRepository
{
  private static instance: InMemoryVideogameConsoleRepository | null = null

  public static getInstance(): InMemoryVideogameConsoleRepository {
    if (!InMemoryVideogameConsoleRepository.instance) {
      InMemoryVideogameConsoleRepository.instance =
        new InMemoryVideogameConsoleRepository()
    }

    return InMemoryVideogameConsoleRepository.instance
  }

  private Consoles: { [key: string]: VideogameConsole } = {
    'playstation-5': {
      id: 'playstation-5',
      name: 'PlayStation 5',
      info: {
        manufacturer: 'Sony',
        description: 'consoles.playstation-5.description',
        launchYear: 2020,
      },
    },
  }

  async findAll(): Promise<VideogameConsole[]> {
    return Object.values(this.Consoles)
  }

  async findOne(id: string): Promise<VideogameConsole> {
    return this.Consoles[id]
  }
}
