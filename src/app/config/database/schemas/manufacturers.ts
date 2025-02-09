import { pgTable, text, varchar } from 'drizzle-orm/pg-core'

export const manufacturers = pgTable('manufacturers', {
  id: varchar('id').primaryKey(),
  name: text('name').notNull(),
})
