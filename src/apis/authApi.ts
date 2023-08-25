import { axiosInstance } from "./axios";

export const signin = async ({ email, password } : {
  email: string,
  password: string,
}) => {
  const { data } = await axiosInstance.post('/auth/signin', {email, password});

  return data.access_token;
};

export const signup = async ({ email, password } : {
  email: string,
  password: string,
}) => {
  await axiosInstance.post('/auth/signup', { email, password });
};
