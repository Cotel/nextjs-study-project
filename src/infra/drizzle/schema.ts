import { generateUuid } from '@core/shared/entities/Uuid'
import {
  integer,
  pgTable,
  primaryKey,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'
import { AdapterAccountType } from 'next-auth/adapters'

export const userTable = pgTable('users', {
  id: text()
    .primaryKey()
    .$defaultFn(() => generateUuid()),
  email: text().notNull().unique(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
})

export const userPasswordTable = pgTable('user_passwords', {
  userId: text()
    .primaryKey()
    .references(() => userTable.id, { onDelete: 'cascade' }),
  hash: text().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
})

export const userAccountTable = pgTable(
  'user_accounts',
  {
    userId: text()
      .notNull()
      .references(() => userTable.id, { onDelete: 'cascade' }),
    type: text().$type<AdapterAccountType>().notNull(),
    provider: text().notNull(),
    providerAccountId: text().notNull(),
    accessToken: text(),
    expiresAt: integer(),
    refreshToken: text(),
    idToken: text(),
    tokenType: varchar(),
    scope: text(),
    sessionState: text(),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow(),
  },
  (account) => [
    {
      compoundKey: primaryKey({
        columns: [account.provider, account.providerAccountId],
      }),
    },
  ],
)

export const productCategoryTable = pgTable('product_categories', {
  id: text()
    .primaryKey()
    .$defaultFn(() => generateUuid()),
  name: text().notNull(),
})

export const productTable = pgTable('products', {
  id: text()
    .primaryKey()
    .$defaultFn(() => generateUuid()),

  imageUrl: text().notNull(),
  priceAmount: integer().notNull(),
  priceCurrency: text().notNull(),
  title: text().notNull(),
  details: text().notNull(),
  status: text().notNull(),
  productCategoryId: text()
    .notNull()
    .references(() => productCategoryTable.id, { onDelete: 'cascade' }),
  sellingStatus: text().notNull(),
  sellerId: text()
    .notNull()
    .references(() => userTable.id, { onDelete: 'no action' }),
})
