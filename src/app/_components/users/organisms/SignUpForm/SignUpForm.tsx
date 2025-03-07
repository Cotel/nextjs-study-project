import { Button, Card, Flex, Heading, Text, TextField } from '@radix-ui/themes'
import { signUpAction } from '@ui/actions/auth'
import { useTranslations } from 'next-intl'

export const SignUpForm = () => {
  const t = useTranslations('auth.signUp')

  return (
    <Card>
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h1">{t('title')}</Heading>

          <Text as="p">{t('subtitle')}</Text>
        </Flex>

        <Flex direction="column" gap="4" asChild>
          <form action={signUpAction}>
            <Flex direction="column" gap="2">
              <Text htmlFor="email">{t('email.label')}</Text>

              <TextField.Root
                name="email"
                type="email"
                placeholder={t('email.placeholder')}
                required
              />
            </Flex>

            <Flex direction="column" gap="2">
              <Text htmlFor="password">{t('password.label')}</Text>

              <TextField.Root
                name="password"
                type="password"
                placeholder={t('password.placeholder')}
                required
              />
            </Flex>

            <Button size="3">{t('submit')}</Button>
          </form>
        </Flex>
      </Flex>
    </Card>
  )
}
