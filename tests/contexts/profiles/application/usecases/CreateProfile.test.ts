import { ProfileRepository } from '@core/profiles/application/interfaces/ProfileRepository'
import { CreateProfile } from '@core/profiles/application/usecases/CreateProfile'
import { Profile } from '@core/profiles/entities/Profile'
import { getCurrentUnixTimestamp } from '@core/shared/entities/UnixTimestamp'

jest.mock('@core/shared/entities/UnixTimestamp', () => ({
  getCurrentUnixTimestamp: jest.fn(),
}))

describe('CreateProfile', () => {
  let createProfile: CreateProfile
  let mockProfileRepository: jest.Mocked<ProfileRepository>
  const mockTimestamp = '2024-03-04T16:30:00Z'
  const mockUserId = 'test-user-id'

  beforeEach(() => {
    mockProfileRepository = {
      findByUserId: jest.fn(),
      update: jest.fn(),
      create: jest.fn(),
    }
    createProfile = new CreateProfile(mockProfileRepository)
    ;(getCurrentUnixTimestamp as jest.Mock).mockReturnValue(mockTimestamp)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should create a new empty profile when user does not have one', async () => {
    // Setup
    mockProfileRepository.findByUserId.mockResolvedValue(null)
    const expectedProfile: Profile = {
      userId: mockUserId,
      fullName: '',
      userName: '',
      avatarUrl: '',
      biography: undefined,
      score: 0,
      sales: 0,
      createdAt: mockTimestamp,
      updatedAt: mockTimestamp,
    }

    // Execute
    await createProfile.execute(mockUserId)

    // Assert
    expect(mockProfileRepository.findByUserId).toHaveBeenCalledWith(mockUserId)
    expect(mockProfileRepository.create).toHaveBeenCalledWith(expectedProfile)
  })

  it('should not create a profile if one already exists', async () => {
    // Setup
    const existingProfile: Profile = {
      userId: mockUserId,
      fullName: 'Existing Name',
      userName: 'existinguser',
      avatarUrl: 'existing-avatar.jpg',
      biography: 'Existing bio',
      score: 0,
      sales: 0,
      createdAt: '2024-03-01T10:00:00Z',
      updatedAt: '2024-03-01T10:00:00Z',
    }
    mockProfileRepository.findByUserId.mockResolvedValue(existingProfile)

    // Execute
    await createProfile.execute(mockUserId)

    // Assert
    expect(mockProfileRepository.findByUserId).toHaveBeenCalledWith(mockUserId)
    expect(mockProfileRepository.create).not.toHaveBeenCalled()
  })
})
