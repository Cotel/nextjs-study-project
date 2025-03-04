'use client'

import { Button } from '@radix-ui/themes'
import { generateFakeUser } from './actions'

export const GenerateFakeUserButton = () => {
  return <Button onClick={() => generateFakeUser()}>Generate Fake User</Button>
}
