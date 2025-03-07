import { Container, Flex, Section } from '@radix-ui/themes'
import { SignUpForm } from '@ui/components/users/organisms/SignUpForm/SignUpForm'

const SignUpPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Container size="2">
        <SignUpForm />
      </Container>
    </div>
  )
}

export default SignUpPage
