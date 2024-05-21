import { useEffect } from "react"
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";

export const Callback: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate('/');
    } else {
      navigate('/login');
    }

  }, [auth])

  return null;
}