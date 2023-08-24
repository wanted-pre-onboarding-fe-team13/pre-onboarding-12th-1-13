import { baseInstance } from './axios';

export const signin = async ({ email, password } : {
  email: string,
  password: string,
}) => {
  const { data } = await baseInstance.post('/auth/signin', {email, password});

  return data.access_token;
};

export const signup = async ({ email, password } : {
  email: string,
  password: string,
}) => {
  await baseInstance.post('/auth/signup', { email, password });
};
