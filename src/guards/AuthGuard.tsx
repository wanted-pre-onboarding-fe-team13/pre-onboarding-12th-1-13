import { PropsWithChildren, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContext';

const AuthGuard = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  const { authenticated } = useAuthContext();

  useEffect(() => {
    if (authenticated) {
      navigate('/todo');
    }
  }, [authenticated, navigate]);

  return <>{children}</>;
};

export default AuthGuard;
