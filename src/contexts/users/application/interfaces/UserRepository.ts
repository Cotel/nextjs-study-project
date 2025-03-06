import { User } from '@core/users/entities/User'

export interface UserRepository {
  create(user: User): Promise<User>
}
