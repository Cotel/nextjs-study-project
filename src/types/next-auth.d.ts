import { Uuid } from '@core/shared/entities/Uuid'
import { DefaultSession } from 'next-auth'

// Extend the Session interface
declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession`, and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    /**
     * Flag indicating whether the user's profile is complete
     */
    profileComplete: boolean
    user: {
      /**
       * The user's unique identifier
       */
      id: string
    } & DefaultSession['user']
  }

  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    id: Uuid
    email?: string | null
  }
}

// Extend the JWT interface
declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /**
     * User ID
     */
    id?: Uuid
    /**
     * Flag indicating whether the user's profile is complete
     */
    profileComplete?: boolean
  }
}
