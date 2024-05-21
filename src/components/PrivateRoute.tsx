// src/components/PrivatePage.tsx
import React from 'react';
import { useAuth } from 'react-oidc-context';
import { CustomOidcUser } from '../types/OidcUser';


const PrivatePage: React.FC = () => {
  const auth = useAuth();

  const user = auth.user as CustomOidcUser;
  const profile = user?.profile;

  return (
    <div>
      <p>Private Page</p>
      <p>{profile?.Broker}</p>
      <button onClick={() => void auth.removeUser()}>Log out</button>
    </div>
  )
};

export default PrivatePage;

