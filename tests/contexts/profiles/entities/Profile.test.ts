import { Profile } from '@core/profiles/entities/Profile'
import { getCurrentUnixTimestamp } from '@core/shared/entities/UnixTimestamp'

jest.mock('@core/shared/entities/UnixTimestamp', () => ({
  getCurrentUnixTimestamp: jest.fn(),
}))

describe('Profile', () => {
  describe('createEmptyProfile', () => {
    const mockTimestamp = 1234567890
    const mockUserId = 'test-user-id'

    beforeEach(() => {
      ;(getCurrentUnixTimestamp as jest.Mock).mockReturnValue(mockTimestamp)
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should create an empty profile with default values', () => {
      const profile = Profile.createEmptyProfile(mockUserId)

      expect(profile).toEqual({
        userId: mockUserId,
        avatarUrl: '',
        fullName: '',
        userName: '',
        biography: undefined,
        score: 0,
        sales: 0,
        createdAt: mockTimestamp,
        updatedAt: mockTimestamp,
      })
    })

    it('should use the current timestamp for both createdAt and updatedAt', () => {
      const profile = Profile.createEmptyProfile(mockUserId)

      expect(getCurrentUnixTimestamp).toHaveBeenCalledTimes(1)
      expect(profile.createdAt).toBe(mockTimestamp)
      expect(profile.updatedAt).toBe(mockTimestamp)
    })
  })
})
