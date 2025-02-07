import { VideogameConsole } from './VideogameConsole'

export interface VideogameConsoleRepository {
  findAll(): Promise<VideogameConsole[]>

  findOne(id: string): Promise<VideogameConsole>
}
