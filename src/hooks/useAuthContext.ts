import { useContext } from 'react';

import { AuthContext } from '../context/AuthProvider';

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Cannot find AuthProvider');
  }
  
  return context;
};
