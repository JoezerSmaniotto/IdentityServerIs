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


// // src/components/PrivateRoute.tsx
// import React, { ReactNode, useEffect, useState } from 'react';
// import { useAuth } from 'react-oidc-context';
// import { useNavigate } from 'react-router-dom';

// interface PrivateRouteProps {
//   children: ReactNode,
// }

// const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
//   const auth = useAuth();
//   const navigate = useNavigate();
//   const [myPage, setMyPage] = useState<any>(null);

//   useEffect(() => {
//     if (!auth.isAuthenticated) {// Não esta autenticado
//       navigate('/');
//     } else {
//       setMyPage(children);
//     }
//   }, [auth])

//   return myPage;

// };

// export default PrivateRoute;
