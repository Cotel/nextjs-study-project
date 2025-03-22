import { UserAccountRepository } from '@core/users/application/interfaces/UserAccountRepository'
import { UserRepository } from '@core/users/application/interfaces/UserRepository'
import { User } from '@core/users/entities/User'
import { UserAccount } from '@core/users/entities/UserAccount'
import { Adapter, AdapterAccount } from 'next-auth/adapters'

export function DomainAdapter(
  userRepository: UserRepository,
  userAccountRepository: UserAccountRepository,
): Adapter {
  return {
    async createUser(user) {
      const domainUser = await User.createUser({
        email: user.email!,
      })

      const createdUser = await userRepository.create(domainUser)

      return {
        id: createdUser.id,
        email: createdUser.email,
        emailVerified: null,
      }
    },

    async getUser(id) {
      const user = await userRepository.findById(id)
      if (!user) return null

      return {
        id: user.id,
        email: user.email,
        emailVerified: null,
      }
    },

    async getUserByEmail(email) {
      const user = await userRepository.findByEmail(email)
      if (!user) return null

      return {
        id: user.id,
        email: user.email,
        emailVerified: null,
      }
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const accounts = await userAccountRepository.findMany(providerAccountId)
      const account = accounts.find((a) => a.provider === provider)
      if (!account) return null

      const user = await userRepository.findById(account.userId)
      if (!user) return null

      return {
        id: user.id,
        email: user.email,
        emailVerified: null,
      }
    },

    async updateUser(user) {
      const existingUser = await userRepository.findById(user.id)
      if (!existingUser) throw new Error('User not found')

      const updatedUser = {
        ...existingUser,
        email: user.email ?? existingUser.email,
        updatedAt: new Date().toISOString(),
      }

      await userRepository.update(updatedUser)

      return {
        id: updatedUser.id,
        email: updatedUser.email,
        emailVerified: null,
      }
    },

    async linkAccount(account: AdapterAccount) {
      const now = new Date().toISOString()
      const userAccount: UserAccount = {
        userId: account.userId,
        type: account.type,
        provider: account.provider,
        providerAccountId: account.providerAccountId,
        accessToken: account.access_token?.toString(),
        expiresAt: account.expires_at?.toString(),
        refreshToken: account.refresh_token?.toString(),
        idToken: account.id_token?.toString(),
        tokenType: account.token_type?.toString(),
        scope: account.scope?.toString(),
        sessionState: account.session_state?.toString(),
        createdAt: now,
        updatedAt: now,
      }

      await userAccountRepository.create(userAccount)
    },

    async unlinkAccount({ providerAccountId, provider }) {
      await userAccountRepository.deleteMany(providerAccountId, provider)
    },
  }
}
