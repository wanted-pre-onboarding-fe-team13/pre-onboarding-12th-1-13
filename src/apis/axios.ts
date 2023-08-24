import axios from 'axios';

const axiosClient = () => {
  return axios.create({
    baseURL: 'https://www.pre-onboarding-selection-task.shop',
  });
};

export const baseInstance = axiosClient();
export const authInstance = axiosClient();

authInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token');
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});
