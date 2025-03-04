import { randomUUID } from 'crypto'

export type Uuid = string

export const generateUuid = () => {
  return randomUUID()
}
