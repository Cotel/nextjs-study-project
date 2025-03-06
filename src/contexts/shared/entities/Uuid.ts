import { randomUUID } from 'node:crypto'

export type Uuid = string

export const generateUuid = (): Uuid => {
  return randomUUID()
}
