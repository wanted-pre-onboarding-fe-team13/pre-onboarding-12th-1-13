export const jwtDecode = (accessToken: string) => {
  const base64Url = accessToken.split('.')[1];
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

  const decoded = jwtDecode(accessToken);

  const current = Date.now() / 1000;

  return decoded.exp > current;
};

export const handleTokenExpired = (exp: number) => {
  let expiredTimer;

  const current = Date.now();

  const leftTime = exp * 1000 - current;

  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(() => {
    alert('Token expired');

    localStorage.removeItem('access_token');

    window.location.href = '/signin';
  }, leftTime);
};

export const setLocalStorage = (accessToken: string) => {
  try {
    if (!accessToken) {
      throw Error('empty token');  
    }

    localStorage.setItem('access_token', accessToken);
    
    const { exp } = jwtDecode(accessToken);

    handleTokenExpired(exp);
  } catch (e) {
    localStorage.removeItem('access_token');
  }
};