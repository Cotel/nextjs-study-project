import { Email } from '@core/shared/entities/Email'
import { AuthService } from '@core/users/application/interfaces/AuthService'

type SignInUserWithCredentialsParams = {
  email: Email
  password: string
}

export class SignInUserWithCredentials {
  constructor(private readonly authService: AuthService) {}

  async execute(params: SignInUserWithCredentialsParams): Promise<void> {
    await this.authService.signInWithCredentials(params.email, params.password)
  }
}
