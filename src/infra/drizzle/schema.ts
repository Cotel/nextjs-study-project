import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core'

export const productCategoryTable = pgTable('product_categories', {
  id: uuid().defaultRandom().primaryKey(),
  name: varchar().notNull(),
})
