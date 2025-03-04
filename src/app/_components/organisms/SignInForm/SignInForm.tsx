import { signIn } from '@infra/auth/index'

export const SignInForm = () => {
  return (
    <form
      action={async (formData) => {
        'use server'

        await signIn('credentials', formData)
      }}
    >
      <label>
        Email
        <input type="email" name="email" />
      </label>

      <label>
        Password
        <input type="password" name="password" />
      </label>

      <button>Sign In</button>
    </form>
  )
}
