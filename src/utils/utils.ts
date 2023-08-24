import { axiosClient } from './../apis/axios'

export const isValidEmail = (email: string) => {
  return email.includes('@');
};

export const isValidPassword = (password: string) => {
  return password.length >= 8;
};

export const jwtDecode = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join(''),
  );

  return JSON.parse(jsonPayload);
};

export const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }

  const decodedToken = jwtDecode(accessToken);

  if (!decodedToken.exp || typeof decodedToken.exp !== "number") {
    return false;
  }

  const currentTime = Date.now() / 1000;

  return decodedToken.exp > currentTime;
};
