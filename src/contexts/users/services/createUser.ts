import { db } from '@infra/drizzle/db'
import { userPasswordTable, userTable } from '@infra/drizzle/schema'
import bcrypt from 'bcryptjs'

type CreateUserParams = {
  email: string
  name: string
  password: string
}

export async function createUser({ email, name, password }: CreateUserParams) {
  // Hash the password
  const hash = await bcrypt.hash(password, 10)

  // Create user and password in a transaction
  return await db.transaction(async (tx) => {
    // Create the user first
    const [user] = await tx
      .insert(userTable)
      .values({
        name,
        email,
      })
      .returning()

    // Store the password hash
    await tx.insert(userPasswordTable).values({
      userId: user.id,
      hash,
    })

    console.log('User created', user)

    return user
  })
}
