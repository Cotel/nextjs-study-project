export class ProfileNotFoundError extends Error {
  constructor(userId: string) {
    super(`Profile not found for user ${userId}`)
    this.name = 'ProfileNotFoundError'
  }
}
