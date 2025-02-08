import { faker } from '@faker-js/faker/locale/en'
import { User } from '../domain/User'
import { UserRepository } from '../domain/UserRepository'

export class InMemoryUserRepository implements UserRepository {
  private static instance: InMemoryUserRepository

  public static getInstance(): InMemoryUserRepository {
    if (!InMemoryUserRepository.instance) {
      InMemoryUserRepository.instance = new InMemoryUserRepository()
    }

    return InMemoryUserRepository.instance
  }

  private Users: { [id: string]: User } = {}

  constructor() {
    for (let i = 0; i < 5; i++) {
      const id = `${i + 1}`

      this.Users[id] = {
        id,
        username: faker.internet.username(),
        email: faker.internet.email(),
        profile: {
          fullName: faker.person.fullName(),
          avatarUrl: faker.image.avatar(),
        },
      }
    }
  }

  async findAll(): Promise<User[]> {
    return Object.values(this.Users)
  }

  async findOne(id: string): Promise<User> {
    return this.Users[id]
  }

  async save(user: User): Promise<User> {
    this.Users[user.id] = user

    return user
  }

  async delete(deletingId: string): Promise<void> {
    this.Users = Object.entries(this.Users)
      .filter(([id]) => id !== deletingId)
      .reduce((acc, current) => ({ ...acc, current }), {})
  }
}
