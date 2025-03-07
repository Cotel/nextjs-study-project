import { AuthJsService } from '@infra/auth/AuthJsService'

export const services = {
  auth: new AuthJsService(),
} as const
