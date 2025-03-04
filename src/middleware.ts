import { auth as authMiddleware } from '@infra/auth/index'
import createMiddleware from 'next-intl/middleware'
import { routing } from './app/_i18n/routing'

export default authMiddleware(createMiddleware(routing))

export const config = {
  matcher: ['/', '/(es|en)/:path'],
}
