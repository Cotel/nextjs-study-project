import { Email } from '@core/shared/entities/Email'
import { Uuid } from '@core/shared/entities/Uuid'
import { User } from '@core/users/entities/User'

export interface UserRepository {
  create(user: User): Promise<User>
  update(user: User): Promise<User>
  findById(id: Uuid): Promise<User | null>
  findByEmail(email: Email): Promise<User | null>
}
