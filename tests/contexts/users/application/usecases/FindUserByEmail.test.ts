import { Email } from '@core/shared/entities/Email'
import { FindUserByEmail } from '@core/users/application/usecases/FindUserByEmail'
import { User } from '@core/users/entities/User'
import { InMemoryUserRepository } from '@infra/users/InMemoryUserRepository'

describe('FindUserByEmail', () => {
  let repository: InMemoryUserRepository
  let useCase: FindUserByEmail

  const existingUser = {
    id: 'test-id',
    email: 'john@example.com' as Email,
    createdAt: '2024-03-04T12:00:00.000Z',
    updatedAt: '2024-03-04T12:00:00.000Z',
  }

  beforeEach(() => {
    repository = new InMemoryUserRepository({
      [existingUser.id]: existingUser,
    })
    useCase = new FindUserByEmail(repository)
  })

  it('should find a user by email when it exists', async () => {
    const result = await useCase.execute(existingUser.email)
    expect(result).toEqual(existingUser)
  })

  it('should return null when user does not exist', async () => {
    const result = await useCase.execute('nonexistent@example.com' as Email)
    expect(result).toBeNull()
  })
})
