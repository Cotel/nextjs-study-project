import { UnixTimestamp } from '@core/shared/entities/UnixTimestamp'
import { Uuid } from '@core/shared/entities/Uuid'
import { AdapterAccount } from 'next-auth/adapters'

export type UserAccount = {
  userId: Uuid
  type: AdapterAccount['type']
  provider: string
  providerAccountId: string
  accessToken?: string
  expiresAt?: UnixTimestamp
  refreshToken?: string
  idToken?: string
  tokenType?: string
  scope?: string
  sessionState?: string
  createdAt: UnixTimestamp
  updatedAt: UnixTimestamp
}
