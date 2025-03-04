import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes'
import { SignInForm } from '@ui/components/organisms/SignInForm/SignInForm'
import { getTranslations } from 'next-intl/server'
import { GenerateFakeUserButton } from './GenerateFakeUserButton'

const LandingPage = async () => {
  return (
    <Container size="2" asChild>
      <Flex>
        <Callout />

        <Flex>
          <SignInForm />
        </Flex>

        <GenerateFakeUserButton />
      </Flex>
    </Container>
  )
}

const Callout = async () => {
  const t = await getTranslations('landing')

  return (
    <Box
      m="4"
      p="6"
      style={{
        backgroundColor: 'var(--accent-4)',
        borderRadius: 'var(--radius-4)',
      }}
    >
      <Flex align="center" direction="column" gap="3">
        <Heading>{t('callout.title')}</Heading>

        <Text as="p" align="center">
          {t('callout.body')}
        </Text>
      </Flex>
    </Box>
  )
}

export default LandingPage
