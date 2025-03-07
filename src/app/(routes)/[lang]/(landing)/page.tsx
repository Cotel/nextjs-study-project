import { auth } from '@infra/auth'
import { Box, Button, Container, Flex, Heading, Text } from '@radix-ui/themes'
import { signOut } from '@ui/actions/auth'
import { getTranslations } from 'next-intl/server'

const LandingPage = async () => {
  const session = await auth()

  return (
    <Container size="2" asChild>
      <Flex>
        <Callout />

        {!!session && (
          <Flex direction="row" justify="between" align="center">
            <div>Logged in as {session?.user?.email}</div>

            <Button onClick={signOut} color="red">
              Sign out
            </Button>
          </Flex>
        )}
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
