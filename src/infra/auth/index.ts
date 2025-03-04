import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { UserPassword } from '@core/users/entities/UserPassword'
import { eq } from 'drizzle-orm'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { db } from '../drizzle/db'
import { userPasswordTable, userTable } from '../drizzle/schema'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials

        // Find user and their password
        const [user] = await db
          .select({
            user: userTable,
            passwordHash: userPasswordTable.hash,
          })
          .from(userTable)
          .leftJoin(
            userPasswordTable,
            eq(userTable.id, userPasswordTable.userId),
          )
          .where(eq(userTable.email, email as string))

        if (!user?.passwordHash || !user.user) {
          return null
        }

        // Validate password using domain entity
        const isValid = await UserPassword.checkPassword({
          hash: user.passwordHash,
          password: password as string,
        })

        if (!isValid) {
          return null
        }

        return {
          id: user.user.id,
          name: user.user.name,
          email: user.user.email,
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
})
