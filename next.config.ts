import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/app/(i18n)/request.ts')

const nextConfig: NextConfig = {
  /* Next.js configurations */
}

export default withNextIntl(nextConfig)
