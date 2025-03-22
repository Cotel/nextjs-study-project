import { Email } from '@core/shared/entities/Email'
import { ValidationError } from '@core/shared/errors/ValidationError'
import { SignUpUserWithCredentials } from '@core/users/application/usecases/SignUpUserWithCredentials'
import { User } from '@core/users/entities/User'
import { UserPassword } from '@core/users/entities/UserPassword'
import { InMemoryUserRepository } from '@infra/users/InMemoryUserRepository'

// Mock dependencies
jest.mock('@core/shared/entities/Email', () => ({
  Email: {
    validateEmail: jest.fn(),
  },
}))

jest.mock('@core/users/entities/User', () => ({
  User: {
    createUser: jest.fn(),
  },
}))

jest.mock('@core/users/entities/UserPassword', () => ({
  UserPassword: {
    validatePassword: jest.fn(),
  },
}))

describe('SignUpUserWithCredentials', () => {
  let repository: InMemoryUserRepository
  let useCase: SignUpUserWithCredentials

  const validParams = {
    email: 'john@example.com' as Email,
    password: 'ValidPass123',
  }

  beforeEach(() => {
    jest.clearAllMocks()
    repository = new InMemoryUserRepository()
    useCase = new SignUpUserWithCredentials(repository)

    // Default mock implementations
    ;(Email.validateEmail as jest.Mock).mockReturnValue([])
    ;(UserPassword.validatePassword as jest.Mock).mockReturnValue([])
  })

  describe('execute', () => {
    it('should create a user with valid parameters', async () => {
      const mockUser = {
        id: 'test-id',
        email: validParams.email,
        createdAt: '2024-03-04T12:00:00.000Z',
        updatedAt: '2024-03-04T12:00:00.000Z',
      }
      ;(User.createUser as jest.Mock).mockResolvedValue(mockUser)

      await useCase.execute(validParams)

      expect(User.createUser).toHaveBeenCalledWith(validParams)

      // Verify user was stored in repository
      const storedUser = repository.getById(mockUser.id)
      expect(storedUser).toEqual(mockUser)
    })

    it('should throw ValidationError when email is invalid', async () => {
      const emailError = {
        field: 'email',
        message: 'Invalid email format',
      }
      ;(Email.validateEmail as jest.Mock).mockReturnValue([emailError])

      await expect(useCase.execute(validParams)).rejects.toThrow(
        ValidationError,
      )
      await expect(useCase.execute(validParams)).rejects.toMatchObject({
        errors: expect.arrayContaining([emailError]),
      })

      expect(Email.validateEmail).toHaveBeenCalledWith(validParams.email)
      // Verify no user was stored
      expect(repository.getAll()).toHaveLength(0)
    })

    it('should throw ValidationError when password is invalid', async () => {
      const passwordError = {
        field: 'password',
        message: 'Password must be at least 8 characters long',
      }
      ;(UserPassword.validatePassword as jest.Mock).mockReturnValue([
        passwordError,
      ])

      await expect(useCase.execute(validParams)).rejects.toThrow(
        ValidationError,
      )
      await expect(useCase.execute(validParams)).rejects.toMatchObject({
        errors: expect.arrayContaining([passwordError]),
      })

      expect(UserPassword.validatePassword).toHaveBeenCalledWith(
        validParams.password,
      )
      // Verify no user was stored
      expect(repository.getAll()).toHaveLength(0)
    })

    it('should throw ValidationError with multiple validation errors', async () => {
      const emailError = {
        field: 'email',
        message: 'Invalid email format',
      }
      const passwordError = {
        field: 'password',
        message: 'Password must be at least 8 characters long',
      }
      ;(Email.validateEmail as jest.Mock).mockReturnValue([emailError])
      ;(UserPassword.validatePassword as jest.Mock).mockReturnValue([
        passwordError,
      ])

      await expect(useCase.execute(validParams)).rejects.toThrow(
        ValidationError,
      )
      await expect(useCase.execute(validParams)).rejects.toMatchObject({
        errors: expect.arrayContaining([emailError, passwordError]),
      })

      // Verify no user was stored
      expect(repository.getAll()).toHaveLength(0)
    })
  })
})
