export type Uuid = string

let uuidGenerator = () => crypto.randomUUID()

export function generateUuid(): Uuid {
  return uuidGenerator()
}

// Only for testing purposes
export function setUuidGenerator(generator: () => string) {
  uuidGenerator = generator
}
