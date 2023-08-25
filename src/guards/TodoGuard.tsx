import { PropsWithChildren, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContext';

const TodoGuard = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  const { authenticated, loading } = useAuthContext();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!authenticated) {
      navigate('/signin');
    } else {
      setChecked(true);
    }
  }, [authenticated, navigate]);

  if (loading || !checked) {
    return null;
  }

  return <>{children}</>;
};

export default TodoGuard;
