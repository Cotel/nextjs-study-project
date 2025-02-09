import { Box, Card, Flex, Heading, Link, Section, Text } from '@radix-ui/themes'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { getAllManufacturers } from '../../../config/di/container'

const LandingPage = async () => {
  const t = await getTranslations('landing')

  return (
    <>
      <Callout />

      <Section size="2">
        <Heading as="h2" size="5" mb="4">
          {t('categories.title')}
        </Heading>

        <ExploreCategories />
      </Section>
    </>
  )
}

const Callout = () => {
  const t = useTranslations('landing')

  return (
    <Box
      p="8"
      style={{
        backgroundColor: 'var(--accent-4)',
        borderRadius: 'var(--radius-4)',
      }}
    >
      <Flex align="center" direction="column" gap="3">
        <Heading align="center">{t('callout.title')}</Heading>

        <Text as="p" align="center">
          {t('callout.body')}
        </Text>
      </Flex>
    </Box>
  )
}

const ExploreCategories = async () => {
  const manufacturers = await getAllManufacturers.execute()

  return (
    <Flex direction="row" gap="4">
      {manufacturers.map((manufacturer) => (
        <Link
          key={manufacturer.id}
          href={`/listings?manufacturer=${manufacturer.id}`}
          underline="none"
        >
          <Box asChild>
            <Card>
              <Text>{manufacturer.name}</Text>
            </Card>
          </Box>
        </Link>
      ))}
    </Flex>
  )
}

export default LandingPage
