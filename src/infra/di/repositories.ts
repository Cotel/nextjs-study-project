import { InMemoryProfileRepository } from '@infra/profiles/InMemoryProfileRepository'
import { InMemoryUserAccountRepository } from '@infra/users/InMemoryUserAccountRepository'
import { InMemoryUserRepository } from '@infra/users/InMemoryUserRepository'

export const repositories = {
  user: new InMemoryUserRepository(),
  userAccount: new InMemoryUserAccountRepository(),
  profile: new InMemoryProfileRepository(),
  // user: new DrizzleUserRepository(),
  // userAccount: new DrizzleUserAccountRepository(),
  // profile: new DrizzleProfileRepository(),
} as const
