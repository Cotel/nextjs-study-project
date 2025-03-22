import { setUuidGenerator } from '../src/contexts/shared/entities/Uuid'

let mockUuidCounter = 0
setUuidGenerator(() => {
  mockUuidCounter++
  return `mock-uuid-${mockUuidCounter}`
})
