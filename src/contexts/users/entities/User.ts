import { Email } from '@core/shared/entities/Email'
import {
  UnixTimestamp,
  getCurrentUnixTimestamp,
} from '@core/shared/entities/UnixTimestamp'
import { Uuid } from '@core/shared/entities/Uuid'
import { generateUuid } from '@core/shared/entities/Uuid'
import { UserPassword } from './UserPassword'

export type User = {
  id: Uuid
  name: string
  email: Email
  createdAt: UnixTimestamp
  updatedAt: UnixTimestamp
  password?: UserPassword
}

const createUser = async ({
  name,
  email,
  password,
}: {
  name: string
  email: string
  password?: string
}) => {
  const now = getCurrentUnixTimestamp()
  const id = generateUuid()

  const user: User = {
    id,
    name,
    email,
    createdAt: now,
    updatedAt: now,
  }

  if (password) {
    const userPassword = await UserPassword.createUserPassword({
      userId: id,
      password,
    })

    return {
      ...user,
      password: userPassword,
    }
  }

  return user
}

export const User = {
  createUser,
}
