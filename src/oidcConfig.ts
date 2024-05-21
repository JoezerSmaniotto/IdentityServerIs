// src/oidcConfig.ts
const authority = import.meta.env.VITE_AUTHORITY;
const clientID = import.meta.env.VITE_CLIENT_ID;

import { WebStorageStateStore, User } from 'oidc-client-ts';
export const oidcConfig = {
  authority: authority,
  client_id: clientID,
  redirect_uri: "http://localhost:4200/",
  post_logout_redirect_uri: "http://localhost:4200",
  response_type: "code",
  prompt: 'login', // Faz o login sempre acontecer novamente
  scope: "openid robot_signalr_api feeder_subscriber",
  automaticSilentRenew: true,
  //silent_redirect_uri: "http://localhost:4200/silent-renew",
  systemOrigem: 'AAI',
  device_id_type: 'BROWSER',
  device_id: 'BROWSER_ID',
  userStore: new WebStorageStateStore({ store: window.localStorage }), // Adicione esta linha
  onSigninCallback: async (user: User) => {
    if (user) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  },
};
