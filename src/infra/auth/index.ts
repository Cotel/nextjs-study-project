import { Email } from '@core/shared/entities/Email'
import { AuthService } from '@core/users/application/interfaces/AuthService'
import NextAuth from 'next-auth'
import { authConfig } from './config'

const { handlers, signIn, signOut, auth } = NextAuth(authConfig)

class AuthJsService implements AuthService {
  async signInWithCredentials(email: Email, password: string): Promise<void> {
    await signIn('credentials', {
      email,
      password,
      redirect: false, // Prevent automatic redirect
    })
  }

  async signOut(): Promise<void> {
    await signOut()
  }
}

export { handlers, auth, AuthJsService }
