import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useAuthContext } from '../src/hooks/useAuthContext';

const Todoguard = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(0);
  const [loading, setloading] = useState(0);
  const [checked, setChecked] = useState(false);

  //authentication 체크해주는 함수
  const checkAuthentication = useCallback(() => {
    if (!authenticated) {
      navigate('/signin');
    } else {
      setChecked(true);
    }
  }, [authenticated]);

  // 페이지에 들어왔을 때 체크바로 해주기
  useEffect(() => {
    checkAuthentication();
  }, []);

  // loading 하는 중이거나 checked를 안한 상태이면 보여주지 않기
  if (loading || !checked) {
    return null;
  }

  return <>{children}</>;
};

export default Todoguard;
