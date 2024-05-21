// src/components/LoginPage.tsx
import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate('/');
    }
  }, [auth])

  return (
    <div>
      <button onClick={() => void auth.signinRedirect()}>Log in</button>
    </div>
  );
};

export default LoginPage;
