'use server'

import { services } from '@infra/di/services'
import { useCases } from '@infra/di/usecases'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function updateProfile(formData: FormData): Promise<void> {
  const userId = await services.auth.getCurrentUserId()
  if (!userId) {
    throw new Error('Unauthorized')
  }

  const fullName = formData.get('fullName') as string
  const userName = formData.get('userName') as string
  const avatarUrl = formData.get('avatarUrl') as string
  const biography = formData.get('biography') as string

  await useCases.updateProfile.execute({
    userId,
    fullName,
    userName,
    avatarUrl: avatarUrl || undefined,
    biography: biography || undefined,
  })

  // Revalidate the profile page
  revalidatePath('/[lang]/(authenticated)/profile')

  // Redirect to home page after successful update
  redirect('/')
}
