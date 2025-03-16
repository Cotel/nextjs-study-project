import { ProfileRepository } from '@core/profiles/application/interfaces/ProfileRepository'
import { Profile } from '@core/profiles/entities/Profile'
import { Uuid } from '@core/shared/entities/Uuid'

export class CreateProfile {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async execute(userId: Uuid): Promise<void> {
    // Check if profile already exists
    const existingProfile = await this.profileRepository.findByUserId(userId)
    if (existingProfile) {
      return // Profile already exists, nothing to do
    }

    const profile = Profile.createEmptyProfile(userId)
    await this.profileRepository.create(profile)
  }
}
