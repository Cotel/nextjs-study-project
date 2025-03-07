import { Email } from '@core/shared/entities/Email'
import {
  UnixTimestamp,
  getCurrentUnixTimestamp,
} from '@core/shared/entities/UnixTimestamp'
import { Uuid, generateUuid } from '@core/shared/entities/Uuid'
import { UserPassword } from './UserPassword'

export type User = {
  id: Uuid
  email: Email
  createdAt: UnixTimestamp
  updatedAt: UnixTimestamp
  password?: UserPassword
}

const createUser = async ({
  email,
  password,
}: {
  email: string
  password?: string
}) => {
  const now = getCurrentUnixTimestamp()
  const id = generateUuid()

  const user: User = {
    id,
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
