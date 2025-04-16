import { InMemoryProductCategoryRepository } from '@infra/productCategories/InMemoryProductCategoryRepository'
import { InMemoryProductsRepository } from '@infra/products/InMemoryProductsRepository'
import { InMemoryUserAccountRepository } from '@infra/users/InMemoryUserAccountRepository'
import { InMemoryUserRepository } from '@infra/users/InMemoryUserRepository'

export const repositories = {
  user: new InMemoryUserRepository(),
  userAccount: new InMemoryUserAccountRepository(),
  productCategories: new InMemoryProductCategoryRepository(),
  products: new InMemoryProductsRepository(),
  // user: new DrizzleUserRepository(),
  // userAccount: new DrizzleUserAccountRepository(),
} as const
