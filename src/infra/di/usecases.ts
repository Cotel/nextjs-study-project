import { FindUserByEmail } from '@core/users/application/usecases/FindUserByEmail'
import { SignInUserWithCredentials } from '@core/users/application/usecases/SignInUserWithCredentials'
import { SignOutUser } from '@core/users/application/usecases/SignOutUser'
import { SignUpUserWithCredentials } from '@core/users/application/usecases/SignUpUserWithCredentials'
import { repositories } from './repositories'
import { services } from './services'

export const useCases = {
  signUpUserWithCredentials: new SignUpUserWithCredentials(repositories.user),
  findUserByEmail: new FindUserByEmail(repositories.user),
  signInUserWithCredentials: new SignInUserWithCredentials(services.auth),
  signOutUser: new SignOutUser(services.auth),
} as const
