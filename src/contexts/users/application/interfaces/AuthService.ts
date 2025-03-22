import { Email } from '@core/shared/entities/Email'

export interface AuthService {
  signInWithCredentials(email: Email, password: string): Promise<void>
  signOut(): Promise<void>
}
