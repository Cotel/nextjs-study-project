'use server'

import { services } from '@infra/di/services'
import { useCases } from '@infra/di/usecases'
import { redirect } from 'next/navigation'

export const signUpAction = async (formData: FormData): Promise<void> => {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  await useCases.signUpUserWithCredentials.execute({
    email,
    password,
  })

  await useCases.signInUserWithCredentials.execute({
    email,
    password,
  })

  const userId = await services.auth.getCurrentUserId()

  if (userId) {
    await useCases.createProfile.execute(userId)
  }

  redirect('/')
}

export const signOut = async () => {
  await useCases.signOutUser.execute()
}
