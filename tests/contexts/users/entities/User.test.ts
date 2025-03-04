import { User } from '@core/users/entities/User'
import { UserPassword } from '@core/users/entities/UserPassword'

// Mock dependencies
jest.mock('@core/shared/entities/UnixTimestamp', () => ({
  getCurrentUnixTimestamp: () => '2024-03-04T12:00:00.000Z',
}))

jest.mock('@core/shared/entities/Uuid', () => ({
  generateUuid: () => 'mocked-uuid',
}))

jest.mock('@core/users/entities/UserPassword', () => ({
  UserPassword: {
    createUserPassword: jest.fn(),
    validatePassword: jest.fn(),
  },
}))

describe('User', () => {
  describe('createUser', () => {
    const validParams = {
      name: 'John Doe',
      email: 'john@example.com',
    }

    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('should create a user without password', async () => {
      const user = await User.createUser(validParams)

      expect(user).toEqual({
        id: 'mocked-uuid',
        name: 'John Doe',
        email: 'john@example.com',
        createdAt: '2024-03-04T12:00:00.000Z',
        updatedAt: '2024-03-04T12:00:00.000Z',
      })
    })

    it('should create a user with password', async () => {
      const mockUserPassword = {
        userId: 'mocked-uuid',
        hash: 'hashed-password',
        createdAt: '2024-03-04T12:00:00.000Z',
        updatedAt: '2024-03-04T12:00:00.000Z',
      }
      ;(UserPassword.createUserPassword as jest.Mock).mockResolvedValue(
        mockUserPassword,
      )

      const user = await User.createUser({
        ...validParams,
        password: 'valid-password',
      })

      expect(UserPassword.createUserPassword).toHaveBeenCalledWith({
        userId: 'mocked-uuid',
        password: 'valid-password',
      })

      expect(user).toEqual({
        id: 'mocked-uuid',
        name: 'John Doe',
        email: 'john@example.com',
        createdAt: '2024-03-04T12:00:00.000Z',
        updatedAt: '2024-03-04T12:00:00.000Z',
        password: mockUserPassword,
      })
    })

    it('should create different users with different IDs', async () => {
      // Override the mock to generate sequential UUIDs
      let counter = 0
      ;(jest.requireMock('@core/shared/entities/Uuid') as any).generateUuid =
        () => `mocked-uuid-${++counter}`

      const user1 = await User.createUser(validParams)
      const user2 = await User.createUser(validParams)

      expect(user1.id).toBe('mocked-uuid-1')
      expect(user2.id).toBe('mocked-uuid-2')
      expect(user1.id).not.toBe(user2.id)
    })

    it('should create users with the same timestamp if created at the same time', async () => {
      const user1 = await User.createUser(validParams)
      const user2 = await User.createUser(validParams)

      expect(user1.createdAt).toBe(user2.createdAt)
      expect(user1.updatedAt).toBe(user2.updatedAt)
    })

    it('should create users with different timestamps if created at different times', async () => {
      const timestamps = [
        '2024-03-04T12:00:00.000Z',
        '2024-03-04T12:01:00.000Z',
      ]
      let timestampIndex = 0
      ;(
        jest.requireMock('@core/shared/entities/UnixTimestamp') as any
      ).getCurrentUnixTimestamp = () => timestamps[timestampIndex++]

      const user1 = await User.createUser(validParams)
      const user2 = await User.createUser(validParams)

      expect(user1.createdAt).toBe('2024-03-04T12:00:00.000Z')
      expect(user2.createdAt).toBe('2024-03-04T12:01:00.000Z')
      expect(user1.createdAt).not.toBe(user2.createdAt)
    })
  })
})
