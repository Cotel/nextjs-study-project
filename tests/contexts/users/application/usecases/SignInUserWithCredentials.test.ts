import { Email } from '@core/shared/entities/Email'
import { AuthService } from '@core/users/application/interfaces/AuthService'
import { SignInUserWithCredentials } from '@core/users/application/usecases/SignInUserWithCredentials'

describe('SignInUserWithCredentials', () => {
  let authService: AuthService
  let useCase: SignInUserWithCredentials

  const validParams = {
    email: 'john@example.com' as Email,
    password: 'ValidPass123',
  }

  beforeEach(() => {
    jest.clearAllMocks()
    authService = {
      signInWithCredentials: jest.fn().mockResolvedValue(undefined),
      signOut: jest.fn().mockResolvedValue(undefined),
    }
    useCase = new SignInUserWithCredentials(authService)
  })

  describe('execute', () => {
    it('should sign in user with credentials', async () => {
      await useCase.execute(validParams)

      expect(authService.signInWithCredentials).toHaveBeenCalledWith(
        validParams.email,
        validParams.password,
      )
    })
  })
})
