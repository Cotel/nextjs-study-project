import { getUsers } from '@/users/application/GetUsers'
import { InMemoryUserRepository } from '@/users/infra/InMemoryUserRepository'

export async function GET(): Promise<Response> {
  const repository = InMemoryUserRepository.getInstance()

  const data = await getUsers(repository)

  return Response.json(data)
}
