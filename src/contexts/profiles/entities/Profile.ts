import {
  UnixTimestamp,
  getCurrentUnixTimestamp,
} from '@core/shared/entities/UnixTimestamp'
import { Uuid } from '@core/shared/entities/Uuid'

export type Profile = {
  userId: Uuid
  avatarUrl: string
  fullName: string
  userName: string
  biography?: string
  score: number
  sales: number
  createdAt: UnixTimestamp
  updatedAt: UnixTimestamp
}

const createProfile = ({
  userId,
  avatarUrl,
  fullName,
  userName,
  biography,
}: {
  userId: Uuid
  avatarUrl: string
  fullName: string
  userName: string
  biography?: string
}) => {
  const now = getCurrentUnixTimestamp()

  return {
    userId,
    avatarUrl,
    fullName,
    userName,
    biography,
    score: 0,
    sales: 0,
    createdAt: now,
    updatedAt: now,
  }
}

const createEmptyProfile = (userId: Uuid) => {
  return createProfile({
    userId,
    avatarUrl: '',
    fullName: '',
    userName: '', // Empty userName indicates incomplete profile
    biography: undefined,
  })
}

export const Profile = {
  createEmptyProfile,
}
