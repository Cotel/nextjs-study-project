import { Email } from '@core/shared/entities/Email'
import {
  ValidationError,
  ValidationErrorDetail,
} from '@core/shared/errors/ValidationError'
import { UserRepository } from '@core/users/application/interfaces/UserRepository'
import { User } from '@core/users/entities/User'
import { UserPassword } from '@core/users/entities/UserPassword'

type SignUpUserWithCredentialsParams = {
  name: string
  email: Email
  password: string
}

export class SignUpUserWithCredentials {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(params: SignUpUserWithCredentialsParams): Promise<User> {
    this.validate(params)

    const user = await User.createUser(params)

    return await this.userRepository.create(user)
  }

  private validate(params: SignUpUserWithCredentialsParams): void {
    const errors: ValidationErrorDetail[] = []

    if (params.name.length < 2) {
      errors.push({
        field: 'name',
        message: 'Name must be at least 2 characters long',
      })
    }

    errors.push(...Email.validateEmail(params.email))
    errors.push(...UserPassword.validatePassword(params.password))

    if (errors.length > 0) {
      throw new ValidationError(errors)
    }
  }
}
