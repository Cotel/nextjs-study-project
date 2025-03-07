import { Email } from '@core/shared/entities/Email'
import { Uuid } from '@core/shared/entities/Uuid'
import { UserRepository } from '@core/users/application/interfaces/UserRepository'
import { User } from '@core/users/entities/User'
import { db } from '@infra/drizzle/db'
import { userPasswordTable, userTable } from '@infra/drizzle/schema'
import { eq } from 'drizzle-orm'

export class DrizzleUserRepository implements UserRepository {
  async create(user: User): Promise<User> {
    return await db.transaction(async (tx) => {
      const [_] = await tx
        .insert(userTable)
        .values({
          id: user.id,
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

  async update(user: User): Promise<User> {
    const [updatedUser] = await db
      .update(userTable)
      .set({
        email: user.email,
        updatedAt: new Date(user.updatedAt),
      })
      .where(eq(userTable.id, user.id))
      .returning()

    return {
      id: updatedUser.id,
      email: updatedUser.email,
      createdAt: updatedUser.createdAt.toISOString(),
      updatedAt: updatedUser.updatedAt.toISOString(),
    }
  }

  async findById(id: Uuid): Promise<User | null> {
    const [user] = await db
      .select()
      .from(userTable)
      .where(eq(userTable.id, id))
      .leftJoin(userPasswordTable, eq(userTable.id, userPasswordTable.userId))

    if (!user) {
      return null
    }

    return {
      id: user.users.id,
      email: user.users.email,
      createdAt: user.users.createdAt.toISOString(),
      updatedAt: user.users.updatedAt.toISOString(),
      password: user.user_passwords
        ? {
            userId: user.user_passwords.userId,
            hash: user.user_passwords.hash,
            createdAt: user.user_passwords.createdAt.toISOString(),
            updatedAt: user.user_passwords.updatedAt.toISOString(),
          }
        : undefined,
    }
  }

  async findByEmail(email: Email): Promise<User | null> {
    const [user] = await db
      .select()
      .from(userTable)
      .where(eq(userTable.email, email))
      .leftJoin(userPasswordTable, eq(userTable.id, userPasswordTable.userId))

    if (!user) {
      return null
    }

    return {
      id: user.users.id,
      email: user.users.email,
      createdAt: user.users.createdAt.toISOString(),
      updatedAt: user.users.updatedAt.toISOString(),
      password: user.user_passwords
        ? {
            userId: user.user_passwords.userId,
            hash: user.user_passwords.hash,
            createdAt: user.user_passwords.createdAt.toISOString(),
            updatedAt: user.user_passwords.updatedAt.toISOString(),
          }
        : undefined,
    }
  }
}
