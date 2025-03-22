import { Uuid } from '@core/shared/entities/Uuid'
import { UserAccountRepository } from '@core/users/application/interfaces/UserAccountRepository'
import { UserAccount } from '@core/users/entities/UserAccount'
import { db } from '@infra/drizzle/db'
import { userAccountTable } from '@infra/drizzle/schema'
import { and, eq } from 'drizzle-orm'

export class DrizzleUserAccountRepository implements UserAccountRepository {
  async create(account: UserAccount): Promise<UserAccount> {
    const [createdAccount] = await db
      .insert(userAccountTable)
      .values({
        userId: account.userId,
        type: account.type,
        provider: account.provider,
        providerAccountId: account.providerAccountId,
        accessToken: account.accessToken ?? null,
        expiresAt: account.expiresAt ? parseInt(account.expiresAt) : null,
        refreshToken: account.refreshToken ?? null,
        idToken: account.idToken ?? null,
        tokenType: account.tokenType ?? null,
        scope: account.scope ?? null,
        sessionState: account.sessionState ?? null,
        createdAt: new Date(account.createdAt),
        updatedAt: new Date(account.updatedAt),
      })
      .returning()

    return {
      userId: createdAccount.userId,
      type: createdAccount.type,
      provider: createdAccount.provider,
      providerAccountId: createdAccount.providerAccountId,
      accessToken: createdAccount.accessToken ?? undefined,
      expiresAt: createdAccount.expiresAt?.toString(),
      refreshToken: createdAccount.refreshToken ?? undefined,
      idToken: createdAccount.idToken ?? undefined,
      tokenType: createdAccount.tokenType ?? undefined,
      scope: createdAccount.scope ?? undefined,
      sessionState: createdAccount.sessionState ?? undefined,
      createdAt: createdAccount.createdAt.toISOString(),
      updatedAt: createdAccount.updatedAt.toISOString(),
    }
  }

  async deleteMany(userId: Uuid, provider: string): Promise<void> {
    await db
      .delete(userAccountTable)
      .where(
        and(
          eq(userAccountTable.userId, userId),
          eq(userAccountTable.provider, provider),
        ),
      )
  }

  async findMany(userId: Uuid): Promise<UserAccount[]> {
    const accounts = await db
      .select()
      .from(userAccountTable)
      .where(eq(userAccountTable.userId, userId))

    return accounts.map((account) => ({
      userId: account.userId,
      type: account.type,
      provider: account.provider,
      providerAccountId: account.providerAccountId,
      accessToken: account.accessToken ?? undefined,
      expiresAt: account.expiresAt?.toString(),
      refreshToken: account.refreshToken ?? undefined,
      idToken: account.idToken ?? undefined,
      tokenType: account.tokenType ?? undefined,
      scope: account.scope ?? undefined,
      sessionState: account.sessionState ?? undefined,
      createdAt: account.createdAt.toISOString(),
      updatedAt: account.updatedAt.toISOString(),
    }))
  }
}
