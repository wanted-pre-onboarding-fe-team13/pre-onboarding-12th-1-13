import { PropsWithChildren, useCallback, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContext';

const AuthGuard = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  const { authenticated } = useAuthContext();

  const checkAuthentication = useCallback(() => {
    if (authenticated) {
      navigate('/todo');
    }
  }, [authenticated]);

  useEffect(() => {
    checkAuthentication();
  }, [checkAuthentication]);

  return <>{children}</>;
};

export default AuthGuard;
