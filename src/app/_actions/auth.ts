'use server'

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

  redirect('/')
}

export const signOut = async () => {
  await useCases.signOutUser.execute()
}
