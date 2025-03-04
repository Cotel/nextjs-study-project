'use server'

import { createUser } from '@core/users/services/createUser'

export const generateFakeUser = async () => {
  console.log('Generating fake user')

  return await createUser({
    email: 'test@test.com',
    name: 'Test User',
    password: 'password',
  })
}
