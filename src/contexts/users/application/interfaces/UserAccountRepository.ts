import { Uuid } from '@core/shared/entities/Uuid'
import { UserAccount } from '@core/users/entities/UserAccount'

export interface UserAccountRepository {
  create(account: UserAccount): Promise<UserAccount>
  deleteMany(userId: Uuid, providerId: string): Promise<void>
  findMany(userId: Uuid): Promise<UserAccount[]>
}
