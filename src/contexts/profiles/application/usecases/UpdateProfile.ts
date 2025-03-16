import { ProfileRepository } from '@core/profiles/application/interfaces/ProfileRepository'
import { Profile } from '@core/profiles/entities/Profile'
import { ProfileNotFoundError } from '@core/profiles/errors/ProfileNotFoundError'
import { getCurrentUnixTimestamp } from '@core/shared/entities/UnixTimestamp'
import { Uuid } from '@core/shared/entities/Uuid'
import { ValidationError } from '@core/shared/errors/ValidationError'

type UpdateProfileParams = {
  userId: Uuid
  fullName: string
  userName: string
  avatarUrl?: string
  biography?: string
}

export class UpdateProfile {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async execute(params: UpdateProfileParams): Promise<Profile> {
    // Validate userName is not empty
    if (!params.userName.trim()) {
      throw new ValidationError([
        {
          field: 'userName',
          message: 'Username is required and cannot be empty',
        },
      ])
    }

    const existingProfile = await this.profileRepository.findByUserId(
      params.userId,
    )

    if (!existingProfile) {
      throw new ProfileNotFoundError(params.userId)
    }

    // Update the profile with the new values
    const updatedProfile: Profile = {
      ...existingProfile,
      fullName: params.fullName,
      userName: params.userName,
      avatarUrl: params.avatarUrl || existingProfile.avatarUrl,
      biography: params.biography,
      updatedAt: getCurrentUnixTimestamp(),
    }

    return this.profileRepository.update(updatedProfile)
  }
}
