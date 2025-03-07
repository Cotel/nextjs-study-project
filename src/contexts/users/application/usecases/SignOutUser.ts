import { AuthService } from '../interfaces/AuthService'

export class SignOutUser {
  constructor(private readonly authService: AuthService) {}

  async execute() {
    await this.authService.signOut()
  }
}
