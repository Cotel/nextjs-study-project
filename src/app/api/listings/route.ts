import { InMemoryVideogameConsoleRepository } from '@/consoles/infra/InMemoryVideogameConsoleRepository'
import { getListings } from '@/listings/application/GetListings'
import { InMemoryListingRepository } from '@/listings/infra/InMemoryListingRepository'
import { InMemoryUserRepository } from '@/users/infra/InMemoryUserRepository'

export async function GET(): Promise<Response> {
  const repository = InMemoryListingRepository.getInstance()
  const consolesRepository = InMemoryVideogameConsoleRepository.getInstance()
  const usersRepository = InMemoryUserRepository.getInstance()

  const data = await getListings(
    repository,
    consolesRepository,
    usersRepository,
  )

  return Response.json(data)
}
