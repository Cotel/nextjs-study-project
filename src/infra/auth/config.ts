import { UserPassword } from '@core/users/entities/UserPassword'
import { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { repositories } from '../di/repositories'
import { DomainAdapter } from './DomainAdapter'

export const authConfig: NextAuthConfig = {
  adapter: DomainAdapter(repositories.user, repositories.userAccount),
  providers: [
    Credentials({
      credentials: {
        email: { type: 'email', label: 'Email' },
        password: { type: 'password', label: 'Password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await repositories.user.findByEmail(
          credentials.email as string,
        )

        if (!user?.password) {
          return null
        }

        const isValid = await UserPassword.checkPassword({
          hash: user.password.hash,
          password: credentials.password as string,
        })

        if (!isValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
  },
}
