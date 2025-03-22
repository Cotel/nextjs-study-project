import { ValidationErrorDetail } from '../errors/ValidationError'

export type Email = string

const validateEmail = (email: Email): ValidationErrorDetail[] => {
  const errors: ValidationErrorDetail[] = []

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push({
      field: 'email',
      message: 'Invalid email format',
    })
  }

  return errors
}

export const Email = {
  validateEmail,
}
