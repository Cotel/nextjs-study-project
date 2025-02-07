import { User } from './User'

export interface UserRepository {
  findAll(): Promise<User[]>

  findOne(id: string): Promise<User>

  save(user: User): Promise<User>

  delete(id: string): Promise<void>
}
