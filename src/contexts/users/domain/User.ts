import { UserProfile } from './UserProfile';

export interface User {
  id: string;
  username: string;
  email: string;
  profile: UserProfile;
}
