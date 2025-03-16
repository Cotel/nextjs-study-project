import { ProfileRepository } from '@core/profiles/application/interfaces/ProfileRepository'
import { Profile } from '@core/profiles/entities/Profile'
import { Uuid } from '@core/shared/entities/Uuid'
import { db } from '@infra/drizzle/db'
import { profileTable } from '@infra/drizzle/schema'
import { eq } from 'drizzle-orm'

export class DrizzleProfileRepository implements ProfileRepository {
  async create(profile: Profile): Promise<Profile> {
    const [createdProfile] = await db
      .insert(profileTable)
      .values({
        userId: profile.userId,
        avatarUrl: profile.avatarUrl,
        fullName: profile.fullName,
        userName: profile.userName,
        biography: profile.biography ?? null,
        score: profile.score,
        sales: profile.sales,
        createdAt: new Date(profile.createdAt),
        updatedAt: new Date(profile.updatedAt),
      })
      .returning()

    return {
      userId: createdProfile.userId,
      avatarUrl: createdProfile.avatarUrl,
      fullName: createdProfile.fullName,
      userName: createdProfile.userName,
      biography: createdProfile.biography ?? undefined,
      score: createdProfile.score,
      sales: createdProfile.sales,
      createdAt: createdProfile.createdAt.toISOString(),
      updatedAt: createdProfile.updatedAt.toISOString(),
    }
  }

  async update(profile: Profile): Promise<Profile> {
    const [updatedProfile] = await db
      .update(profileTable)
      .set({
        avatarUrl: profile.avatarUrl,
        fullName: profile.fullName,
        userName: profile.userName,
        biography: profile.biography ?? null,
        score: profile.score,
        sales: profile.sales,
        updatedAt: new Date(profile.updatedAt),
      })
      .where(eq(profileTable.userId, profile.userId))
      .returning()

    return {
      userId: updatedProfile.userId,
      avatarUrl: updatedProfile.avatarUrl,
      fullName: updatedProfile.fullName,
      userName: updatedProfile.userName,
      biography: updatedProfile.biography ?? undefined,
      score: updatedProfile.score,
      sales: updatedProfile.sales,
      createdAt: updatedProfile.createdAt.toISOString(),
      updatedAt: updatedProfile.updatedAt.toISOString(),
    }
  }

  async findByUserId(userId: Uuid): Promise<Profile | null> {
    const [profile] = await db
      .select()
      .from(profileTable)
      .where(eq(profileTable.userId, userId))

    if (!profile) {
      return null
    }

    return {
      userId: profile.userId,
      avatarUrl: profile.avatarUrl,
      fullName: profile.fullName,
      userName: profile.userName,
      biography: profile.biography ?? undefined,
      score: profile.score,
      sales: profile.sales,
      createdAt: profile.createdAt.toISOString(),
      updatedAt: profile.updatedAt.toISOString(),
    }
  }
}
