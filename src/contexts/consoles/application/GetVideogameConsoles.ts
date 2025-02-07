import { VideogameConsoleRepository } from '@/consoles/domain/VideogameConsoleRepository'
import { VideogameConsole } from '../domain/VideogameConsole'

export const getVideogameConsoles = (
  repository: VideogameConsoleRepository,
): Promise<VideogameConsole[]> => {
  return repository.findAll()
}
