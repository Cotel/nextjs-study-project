import { ProfileRepository } from '@core/profiles/application/interfaces/ProfileRepository'
import { Profile } from '@core/profiles/entities/Profile'
import { Uuid } from '@core/shared/entities/Uuid'

export class InMemoryProfileRepository implements ProfileRepository {
  private memory: Record<string, Profile> = {}

  constructor(initialProfiles: Record<string, Profile> = {}) {
    this.memory = initialProfiles
  }

  async create(profile: Profile): Promise<Profile> {
    if (this.memory[profile.userId]) {
      throw new Error(`Profile with userId ${profile.userId} already exists`)
    }

    this.memory[profile.userId] = { ...profile }
    return this.memory[profile.userId]
  }

  async update(profile: Profile): Promise<Profile> {
    if (!this.memory[profile.userId]) {
      throw new Error(`Profile with userId ${profile.userId} not found`)
    }

    this.memory[profile.userId] = { ...profile }
    return this.memory[profile.userId]
  }

  async findByUserId(userId: Uuid): Promise<Profile | null> {
    return this.memory[userId] || null
  }

  // Helper methods for testing
  reset(): void {
    this.memory = {}
  }

  getAll(): Profile[] {
    return Object.values(this.memory)
  }

  getByUserId(userId: string): Profile | undefined {
    return this.memory[userId]
  }

  getByUserName(userName: string): Profile | undefined {
    return Object.values(this.memory).find(
      (profile) => profile.userName === userName,
    )
  }
}
