import axios from 'axios';

export const axiosClient = () => {
  return axios.create({
    baseURL: 'https://www.pre-onboarding-selection-task.shop',
  });
};

export const axiosInstance = axiosClient();

