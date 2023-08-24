import { PropsWithChildren, useCallback, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  // context 안에 provider 에서 create 한 것 받기
  const { authenticated } = useContext();

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
