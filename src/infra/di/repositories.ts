import { InMemoryUserAccountRepository } from '@infra/users/InMemoryUserAccountRepository'
import { InMemoryUserRepository } from '@infra/users/InMemoryUserRepository'

export const repositories = {
  user: new InMemoryUserRepository(),
  userAccount: new InMemoryUserAccountRepository(),
  // user: new DrizzleUserRepository(),
  // userAccount: new DrizzleUserAccountRepository(),
} as const
