import { Profile } from '@core/profiles/entities/Profile'
import { Uuid } from '@core/shared/entities/Uuid'

export interface ProfileRepository {
  create(profile: Profile): Promise<Profile>
  update(profile: Profile): Promise<Profile>
  findByUserId(userId: Uuid): Promise<Profile | null>
}
