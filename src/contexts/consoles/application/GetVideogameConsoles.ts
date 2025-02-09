import { VideogameConsoleRepository } from '@/consoles/domain/VideogameConsoleRepository'
import { VideogameConsole } from '../domain/VideogameConsole'

export class GetVideogameConsoles {
  constructor(private repository: VideogameConsoleRepository) {}

  execute(): Promise<VideogameConsole[]> {
    return this.repository.findAll()
  }
}
