import { Email } from '@core/shared/entities/Email'
import { AuthService } from '@core/users/application/interfaces/AuthService'
import { signIn, signOut } from '.'

export class AuthJsService implements AuthService {
  async signInWithCredentials(email: Email, password: string): Promise<void> {
    await signIn('credentials', { email, password })
  }

  async signOut(): Promise<void> {
    await signOut()
  }
}
