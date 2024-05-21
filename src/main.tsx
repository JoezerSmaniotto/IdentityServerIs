import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AuthProvider } from 'react-oidc-context';
import { oidcConfig } from './oidcConfig';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider {...oidcConfig}>
    <App />
  </AuthProvider>,

)
