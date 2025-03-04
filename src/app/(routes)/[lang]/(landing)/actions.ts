'use server'

import { DrizzleUserRepository } from '@infra/users/DrizzleUserRepository'

import { SignUpUserWithCredentials } from '@core/users/application/usecases/SignUpUserWithCredentials'

export const generateFakeUser = async () => {
  console.log('Generating fake user')

  const repository = new DrizzleUserRepository()
  const useCase = new SignUpUserWithCredentials(repository)

  return await useCase.execute({
    email: 'test@test.com',
    name: 'Test User',
    password: 'password',
  })
}
