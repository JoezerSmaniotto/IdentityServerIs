// src/types/OidcUser.ts
import { User } from 'oidc-client-ts';
import { CustomUserProfile } from './UserProfile';

export interface CustomOidcUser extends User {
  profile: User['profile'] & CustomUserProfile;
}
