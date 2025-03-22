import { AuthJsService } from '@infra/auth'

export const services = {
  auth: new AuthJsService(),
} as const
