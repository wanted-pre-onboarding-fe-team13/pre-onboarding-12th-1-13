import axios from 'axios';

export const axiosClient = () => {
  return axios.create({
    baseURL: 'https://www.pre-onboarding-selection-task.shop',
  });
};

export const baseInstance = axiosClient();
export const authInstance = axiosClient();

authInstance.interceptors.request.use(config => {
  // const token = localStorage.getItem('access_token');
  const temp_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndhcmlAd2FyaS5jb20iLCJzdWIiOjE0NjcxLCJpYXQiOjE2OTI4NDE0MDcsImV4cCI6MTY5MzQ0NjIwN30.ZfvbuCopbd603UdhhR_QCD-MVZ2fI_8F8NHwzIG_cag';
  config.headers.Authorization = `Bearer ${temp_token}`;
  return config;
});
