import { DrizzleAdapter } from '@auth/drizzle-adapter'
import bcrypt from 'bcryptjs'
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

        // Verify password
        const isValid = await bcrypt.compare(
          password as string,
          user.passwordHash,
        )

        if (!isValid) {
          return null
        }

        return user.user
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
