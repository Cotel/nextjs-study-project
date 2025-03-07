import { Email } from '@core/shared/entities/Email'
import { UserRepository } from '@core/users/application/interfaces/UserRepository'
import { User } from '@core/users/entities/User'

export class FindUserByEmail {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(email: Email): Promise<User | null> {
    return this.userRepository.findByEmail(email)
  }
}
