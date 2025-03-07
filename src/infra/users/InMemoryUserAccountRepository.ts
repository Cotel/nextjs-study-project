import { Uuid } from '@core/shared/entities/Uuid'
import { UserAccountRepository } from '@core/users/application/interfaces/UserAccountRepository'
import { UserAccount } from '@core/users/entities/UserAccount'

export class InMemoryUserAccountRepository implements UserAccountRepository {
  private memory: UserAccount[] = []

  constructor(initialAccounts: UserAccount[] = []) {
    this.memory = [...initialAccounts]
  }

  async create(account: UserAccount): Promise<UserAccount> {
    // Check if account already exists
    const existingAccount = this.memory.find(
      (a) =>
        a.provider === account.provider &&
        a.providerAccountId === account.providerAccountId,
    )

    if (existingAccount) {
      throw new Error(
        `Account with provider ${account.provider} and id ${account.providerAccountId} already exists`,
      )
    }

    this.memory.push({ ...account })
    return account
  }

  async deleteMany(userId: Uuid, provider: string): Promise<void> {
    this.memory = this.memory.filter(
      (account) =>
        !(account.userId === userId && account.provider === provider),
    )
  }

  async findMany(userId: Uuid): Promise<UserAccount[]> {
    return this.memory
      .filter((account) => account.userId === userId)
      .map((account) => ({ ...account }))
  }

  // Helper methods for testing
  reset(): void {
    this.memory = []
  }

  getAll(): UserAccount[] {
    return [...this.memory]
  }

  findByProviderAndId(
    provider: string,
    providerAccountId: string,
  ): UserAccount | undefined {
    return this.memory.find(
      (account) =>
        account.provider === provider &&
        account.providerAccountId === providerAccountId,
    )
  }
}
