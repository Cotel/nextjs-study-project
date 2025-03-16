import { auth as authMiddleware } from '@infra/auth/index'
import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from './app/_i18n/routing'

const intlMiddleware = createMiddleware(routing)

// Middleware to check if the user has a complete profile
async function profileCompletionMiddleware(
  request: NextRequest,
  response: NextResponse,
) {
  const session = request.cookies.get('next-auth.session-token')

  // If there's no session, continue
  if (!session) {
    return response
  }

  // Get the user from the session
  const user = response.headers.get('x-auth-user')
  if (!user) {
    return response
  }

  // Parse the user data from the session
  try {
    const userData = JSON.parse(user)

    // Check if profile is complete directly from the session data
    // The profileComplete flag is set in the JWT and passed to the session
    const profileComplete = userData.profileComplete === true

    // If the profile is incomplete, redirect to the profile edition page
    if (!profileComplete) {
      // Don't redirect if already on the profile edition page
      const url = request.nextUrl.clone()
      if (!url.pathname.includes('/profile/edit')) {
        url.pathname = '/profile/edit'
        return NextResponse.redirect(url)
      }
    }
  } catch (error) {
    console.error('Error parsing user data:', error)
    // Continue without redirecting if there's an error
  }

  return response
}

// Combine the middlewares
export default authMiddleware(async function middleware(request) {
  // First, apply the intl middleware
  const response = await intlMiddleware(request)

  // Then, check for profile completion
  return profileCompletionMiddleware(request, response)
})

export const config = {
  matcher: ['/', '/(es|en)/:path'],
}
