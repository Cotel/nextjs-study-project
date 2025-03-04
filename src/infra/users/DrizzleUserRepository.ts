import { UserRepository } from '@core/users/application/interfaces/UserRepository'
import { User } from '@core/users/entities/User'
import { db } from '@infra/drizzle/db'
import { userPasswordTable, userTable } from '@infra/drizzle/schema'

export class DrizzleUserRepository implements UserRepository {
  async create(user: User): Promise<User> {
    return await db.transaction(async (tx) => {
      const [_] = await tx
        .insert(userTable)
        .values({
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: new Date(user.createdAt),
          updatedAt: new Date(user.updatedAt),
        })
        .returning()

      // If the user has a pending password, create it
      if (user.password) {
        await tx.insert(userPasswordTable).values({
          userId: user.id,
          hash: user.password.hash,
          createdAt: new Date(user.password.createdAt),
          updatedAt: new Date(user.password.updatedAt),
        })
      }

      return user
    })
  }
}
