// src/App.tsx
import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import AppRoutes from './Routes';

const App: React.FC = () => {
  const auth = useAuth();


  // useEffect(() => {
  //   if (!auth.isLoading && !auth.isAuthenticated) {
  //     auth.signinRedirect();
  //   }
  // }, [auth.isLoading, auth.isAuthenticated, auth]);
  // useEffect(() => {
  //   if (!auth.isLoading && !auth.isAuthenticated && !auth.activeNavigator) {
  //     auth.signinRedirect();
  //   }
  // }, [auth.isLoading, auth.isAuthenticated, auth.activeNavigator, auth]);

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  // if (auth.error) {
  //   return <div>Oops... {auth.error.message}</div>;
  // }


  useEffect(() => {
    // the `return` is important - addAccessTokenExpiring() returns a cleanup function
    return auth.events.addAccessTokenExpiring(() => {
      auth.signinSilent();
    })
  }, [auth.events, auth.signinSilent]);


  // useEffect(() => {
  //   const handleAccessTokenExpiring = () => {
  //     console.log("Token is about to expire, attempting silent renewal...");
  //     auth.signinSilent().catch((error) => {
  //       console.error("Silent renewal failed:", error);
  //     });
  //   };

  //   const handleAccessTokenExpired = () => {
  //     console.log("Token has expired, redirecting to login...");
  //     auth.signinRedirect();
  //   };

  //   auth.events.addAccessTokenExpiring(handleAccessTokenExpiring);
  //   auth.events.addAccessTokenExpired(handleAccessTokenExpired);

  //   return () => {
  //     auth.events.removeAccessTokenExpiring(handleAccessTokenExpiring);
  //     auth.events.removeAccessTokenExpired(handleAccessTokenExpired);
  //   };
  // }, [auth]);


  return (
    <AppRoutes />
  );
};


export default App;