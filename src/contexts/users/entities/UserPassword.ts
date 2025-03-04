import {
  UnixTimestamp,
  getCurrentUnixTimestamp,
} from '@core/shared/entities/UnixTimestamp'
import { Uuid } from '@core/shared/entities/Uuid'
import {
  ValidationError,
  ValidationErrorDetail,
} from '@core/shared/errors/ValidationError'
import bcrypt from 'bcryptjs'

export type UserPassword = {
  userId: Uuid
  hash: string
  createdAt: UnixTimestamp
  updatedAt: UnixTimestamp
}

const createUserPassword = async ({
  userId,
  password,
}: {
  userId: Uuid
  password: string
}): Promise<UserPassword> => {
  const now = getCurrentUnixTimestamp()
  const hash = await bcrypt.hash(password, 10)

  return {
    userId,
    hash,
    createdAt: now,
    updatedAt: now,
  }
}

const validatePassword = (password: string): ValidationErrorDetail[] => {
  const errors: ValidationErrorDetail[] = []

  if (password.length < 8) {
    errors.push({
      field: 'password',
      message: 'Password must be at least 8 characters long',
    })
  }

  if (!/[A-Z]/.test(password)) {
    errors.push({
      field: 'password',
      message: 'Password must contain at least one uppercase letter',
    })
  }

  if (!/[a-z]/.test(password)) {
    errors.push({
      field: 'password',
      message: 'Password must contain at least one lowercase letter',
    })
  }

  if (!/[0-9]/.test(password)) {
    errors.push({
      field: 'password',
      message: 'Password must contain at least one number',
    })
  }

  return errors
}

const checkPassword = async ({
  hash,
  password,
}: {
  hash: string
  password: string
}): Promise<boolean> => bcrypt.compare(password, hash)

export const UserPassword = {
  createUserPassword,
  validatePassword,
  checkPassword,
}
