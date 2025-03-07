export type ValidationErrorDetail = {
  field: string
  message: string
}

export class ValidationError extends Error {
  constructor(public readonly errors: ValidationErrorDetail[]) {
    const message = `Validation failed: ${errors
      .map((error) => `${error.field} - ${error.message}`)
      .join(', ')}`
    super(message)
    this.name = 'ValidationError'
  }
}
