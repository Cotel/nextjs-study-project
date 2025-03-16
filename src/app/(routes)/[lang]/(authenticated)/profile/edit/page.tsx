import { auth } from '@infra/auth'
import { repositories } from '@infra/di/repositories'
import { useCases } from '@infra/di/usecases'
import { redirect } from 'next/navigation'
import { ProfileForm } from './ProfileForm'

export default async function ProfileEditPage() {
  const session = await auth()
  if (!session?.user?.id) {
    redirect('/auth/signin')
  }

  // First ensure a profile exists
  await useCases.createProfile.execute(session.user.id)

  // Then fetch the profile
  const profile = await repositories.profile.findByUserId(session.user.id)
  if (!profile) {
    throw new Error('Profile not found')
  }

  return <ProfileForm profile={profile} />
}
