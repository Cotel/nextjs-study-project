import { UserPassword } from '@core/users/entities/UserPassword'
import bcrypt from 'bcryptjs'

// Mock dependencies
jest.mock('@core/shared/entities/UnixTimestamp', () => ({
  getCurrentUnixTimestamp: () => '2024-03-04T12:00:00.000Z',
}))

jest.mock('bcryptjs', () => ({
  hash: jest.fn(),
  compare: jest.fn(),
}))

describe('UserPassword', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('createUserPassword', () => {
    it('should create a user password with hashed password', async () => {
      const mockHash = 'hashed-password'
      ;(bcrypt.hash as jest.Mock).mockResolvedValue(mockHash)

      const userPassword = await UserPassword.createUserPassword({
        userId: 'test-user-id',
        password: 'ValidPass123',
      })

      expect(bcrypt.hash).toHaveBeenCalledWith('ValidPass123', 10)
      expect(userPassword).toEqual({
        userId: 'test-user-id',
        hash: mockHash,
        createdAt: '2024-03-04T12:00:00.000Z',
        updatedAt: '2024-03-04T12:00:00.000Z',
      })
    })
  })

  describe('validatePassword', () => {
    it('should return no errors for a valid password', () => {
      const errors = UserPassword.validatePassword('ValidPass123')
      expect(errors).toHaveLength(0)
    })

    it('should return error when password is too short', () => {
      const errors = UserPassword.validatePassword('Short1')
      expect(errors).toContainEqual({
        field: 'password',
        message: 'Password must be at least 8 characters long',
      })
    })

    it('should return error when password has no uppercase letters', () => {
      const errors = UserPassword.validatePassword('password123')
      expect(errors).toContainEqual({
        field: 'password',
        message: 'Password must contain at least one uppercase letter',
      })
    })

    it('should return error when password has no lowercase letters', () => {
      const errors = UserPassword.validatePassword('PASSWORD123')
      expect(errors).toContainEqual({
        field: 'password',
        message: 'Password must contain at least one lowercase letter',
      })
    })

    it('should return error when password has no numbers', () => {
      const errors = UserPassword.validatePassword('PasswordNoNumbers')
      expect(errors).toContainEqual({
        field: 'password',
        message: 'Password must contain at least one number',
      })
    })

    it('should return multiple errors when password fails multiple validations', () => {
      const errors = UserPassword.validatePassword('pwd')
      expect(errors).toHaveLength(3) // Should fail length, uppercase, and number checks
    })
  })
})
