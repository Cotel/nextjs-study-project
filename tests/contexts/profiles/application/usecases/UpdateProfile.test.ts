import { ProfileRepository } from '@core/profiles/application/interfaces/ProfileRepository'
import { UpdateProfile } from '@core/profiles/application/usecases/UpdateProfile'
import { Profile } from '@core/profiles/entities/Profile'
import { ProfileNotFoundError } from '@core/profiles/errors/ProfileNotFoundError'
import { getCurrentUnixTimestamp } from '@core/shared/entities/UnixTimestamp'
import { ValidationError } from '@core/shared/errors/ValidationError'

jest.mock('@core/shared/entities/UnixTimestamp', () => ({
  getCurrentUnixTimestamp: jest.fn(),
}))

describe('UpdateProfile', () => {
  let updateProfile: UpdateProfile
  let mockProfileRepository: jest.Mocked<ProfileRepository>
  const mockTimestamp = '2024-03-04T16:30:00Z'

  const mockUserId = 'test-user-id'
  const mockExistingProfile: Profile = {
    userId: mockUserId,
    fullName: 'Old Name',
    userName: 'oldusername',
    avatarUrl: 'old-avatar.jpg',
    biography: 'Old bio',
    score: 0,
    sales: 0,
    createdAt: '2024-03-01T10:00:00Z',
    updatedAt: '2024-03-01T10:00:00Z',
  }

  beforeEach(() => {
    mockProfileRepository = {
      findByUserId: jest.fn(),
      update: jest.fn(),
      create: jest.fn(),
    }
    updateProfile = new UpdateProfile(mockProfileRepository)
    ;(getCurrentUnixTimestamp as jest.Mock).mockReturnValue(mockTimestamp)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should successfully update a profile', async () => {
    const updateParams = {
      userId: mockUserId,
      fullName: 'New Name',
      userName: 'newusername',
      avatarUrl: 'new-avatar.jpg',
      biography: 'New bio',
    }

    mockProfileRepository.findByUserId.mockResolvedValue(mockExistingProfile)
    mockProfileRepository.update.mockResolvedValue({
      ...mockExistingProfile,
      ...updateParams,
      updatedAt: mockTimestamp,
    })

    const result = await updateProfile.execute(updateParams)

    expect(mockProfileRepository.findByUserId).toHaveBeenCalledWith(mockUserId)
    expect(mockProfileRepository.update).toHaveBeenCalledWith({
      ...mockExistingProfile,
      ...updateParams,
      updatedAt: mockTimestamp,
    })
    expect(result).toEqual({
      ...mockExistingProfile,
      ...updateParams,
      updatedAt: mockTimestamp,
    })
  })

  it('should keep existing avatarUrl if not provided in update', async () => {
    const updateParams = {
      userId: mockUserId,
      fullName: 'New Name',
      userName: 'newusername',
      biography: 'New bio',
    }

    mockProfileRepository.findByUserId.mockResolvedValue(mockExistingProfile)
    mockProfileRepository.update.mockResolvedValue({
      ...mockExistingProfile,
      ...updateParams,
      avatarUrl: mockExistingProfile.avatarUrl,
      updatedAt: mockTimestamp,
    })

    const result = await updateProfile.execute(updateParams)

    expect(result.avatarUrl).toBe(mockExistingProfile.avatarUrl)
  })

  it('should throw ValidationError if userName is empty', async () => {
    const updateParams = {
      userId: mockUserId,
      fullName: 'New Name',
      userName: '   ',
      avatarUrl: 'new-avatar.jpg',
      biography: 'New bio',
    }

    await expect(updateProfile.execute(updateParams)).rejects.toThrow(
      ValidationError,
    )
  })

  it('should throw ProfileNotFoundError if profile does not exist', async () => {
    const updateParams = {
      userId: mockUserId,
      fullName: 'New Name',
      userName: 'newusername',
      avatarUrl: 'new-avatar.jpg',
      biography: 'New bio',
    }

    mockProfileRepository.findByUserId.mockResolvedValue(null)

    await expect(updateProfile.execute(updateParams)).rejects.toThrow(
      ProfileNotFoundError,
    )
  })
})
