import { Email } from '@core/shared/entities/Email'
import { UnixTimestamp } from '@core/shared/entities/UnixTimestamp'
import { Uuid } from '@core/shared/entities/Uuid'

export type User = {
  id: Uuid
  name: string
  email: Email
  createdAt: UnixTimestamp
  updatedAt: UnixTimestamp
}
