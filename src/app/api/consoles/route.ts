import { getVideogameConsoles } from '@/consoles/application/GetVideogameConsoles'
import { InMemoryVideogameConsoleRepository } from '@/consoles/infra/InMemoryVideogameConsoleRepository'

export async function GET(): Promise<Response> {
  const repository = InMemoryVideogameConsoleRepository.getInstance()

  const data = await getVideogameConsoles(repository)

  return Response.json(data)
}
