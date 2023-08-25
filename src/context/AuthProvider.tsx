/* eslint-disable no-unused-vars */
import { useState, useEffect, createContext, useCallback, PropsWithChildren } from 'react';

import { signin, signup } from '../apis/auth';

import { isValidToken, setLocalStorage } from '../utils/auth';

interface AuthContextType {
  authenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => void;
  regist: (email: string, password: string) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken && isValidToken(accessToken)) {
      setLocalStorage(accessToken);

      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const accessToken = await signin(email, password);

    setLocalStorage(accessToken);

    setAuthenticated(true);
  }, []);

  const regist = useCallback(async (email: string, password: string) => {
    await signup(email, password);
  }, []);

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        loading,
        login,
        regist,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
