import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

export default function LandingPage() {
  return (
    <Container size="2" asChild>
      <Flex>
        <Callout />

      </Flex>
    </Container>
  );
}

const Callout = () => {
  const t = useTranslations('landing');

  return (
    <Box
      m="4"
      p="6"
      style={{
        backgroundColor: 'var(--accent-4)',
        borderRadius: 'var(--radius-4)',
      }}
    >
      <Flex
        align="center"
        direction="column"
        gap="3"
      >
        <Heading>{t('callout.title')}</Heading>

        <Text as="p" align="center">{t('callout.body')}</Text>
      </Flex>
    </Box>
  );
};
