import { Profile } from '@core/profiles/entities/Profile'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes'
import { updateProfile } from '@ui/actions/profile'

interface ProfileFormProps {
  profile: Profile
  error?: {
    fullName?: string
    userName?: string
    general?: string
  }
}

export function ProfileForm({ profile, error }: ProfileFormProps) {
  const isNewProfile = !profile.fullName && !profile.userName

  return (
    <Container size="2">
      <Box py="6">
        <Heading size="5">
          {isNewProfile ? 'Complete Your Profile' : 'Edit Profile'}
        </Heading>

        {isNewProfile && (
          <Text color="gray" as="p">
            Please complete your profile information to continue using the
            application.
          </Text>
        )}

        <form action={updateProfile}>
          <Flex direction="column" gap="4" mt="5">
            <Box>
              <TextField.Root
                type="text"
                name="fullName"
                defaultValue={profile.fullName || ''}
                placeholder="Full Name"
                required
                style={{
                  width: '100%',
                  border: error?.fullName
                    ? '2px solid var(--red-9)'
                    : undefined,
                }}
              />
              {error?.fullName && (
                <Text color="red" size="1" mt="1">
                  {error.fullName}
                </Text>
              )}
            </Box>

            <Box>
              <TextField.Root
                type="text"
                name="userName"
                defaultValue={profile.userName || ''}
                placeholder="Username"
                required
                style={{
                  width: '100%',
                  border: error?.userName
                    ? '2px solid var(--red-9)'
                    : undefined,
                }}
              />
              <Text color="gray" size="1" mt="1">
                *Required to use the application
              </Text>
              {error?.userName && (
                <Text color="red" size="1" mt="1">
                  {error.userName}
                </Text>
              )}
            </Box>

            <Box>
              <TextField.Root
                type="url"
                name="avatarUrl"
                defaultValue={profile.avatarUrl || ''}
                placeholder="Avatar URL"
                className="rt-TextFieldInput"
                style={{ width: '100%' }}
              />
              {profile.avatarUrl && (
                <Box mt="2">
                  <img
                    src={profile.avatarUrl}
                    alt="Avatar preview"
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              )}
            </Box>

            <Box>
              <TextArea
                name="biography"
                defaultValue={profile.biography || ''}
                placeholder="Biography"
                rows={4}
              />
            </Box>

            {error?.general && (
              <Text color="red" size="2">
                {error.general}
              </Text>
            )}

            <Button style={{ width: 'fit-content' }}>
              {isNewProfile ? 'Save Profile' : 'Update Profile'}
            </Button>
          </Flex>
        </form>
      </Box>
    </Container>
  )
}
