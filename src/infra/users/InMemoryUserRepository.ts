import { UserRepository } from '@core/users/application/interfaces/UserRepository'
import { User } from '@core/users/entities/User'

export class InMemoryUserRepository implements UserRepository {
  private memory: Record<string, User> = {}

  constructor(initialUsers: Record<string, User> = {}) {
    this.memory = initialUsers
  }

  async create(user: User): Promise<User> {
    if (this.memory[user.id]) {
      throw new Error(`User with id ${user.id} already exists`)
    }

    // Check for email uniqueness
    const existingUserWithEmail = Object.values(this.memory).find(
      (existingUser) => existingUser.email === user.email,
    )
    if (existingUserWithEmail) {
      throw new Error(`User with email ${user.email} already exists`)
    }

    this.memory[user.id] = { ...user }
    return this.memory[user.id]
  }

  // Helper methods for testing
  reset(): void {
    this.memory = {}
  }

  getAll(): User[] {
    return Object.values(this.memory)
  }

  getById(id: string): User | undefined {
    return this.memory[id]
  }

  getByEmail(email: string): User | undefined {
    return Object.values(this.memory).find((user) => user.email === email)
  }
}
