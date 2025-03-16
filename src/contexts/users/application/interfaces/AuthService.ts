import { Email } from '@core/shared/entities/Email'
import { Uuid } from '@core/shared/entities/Uuid'

export interface AuthService {
  signInWithCredentials(email: Email, password: string): Promise<void>
  signOut(): Promise<void>
  getCurrentUserId(): Promise<Uuid | null>
}
