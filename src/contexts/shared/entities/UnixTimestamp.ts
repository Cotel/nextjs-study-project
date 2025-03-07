/**
 * Represents a timestamp in ISO 8601 format
 * Example: "2024-03-04T16:30:00Z"
 */
export type UnixTimestamp = string

export const getCurrentUnixTimestamp = (): UnixTimestamp =>
  new Date().toISOString()
