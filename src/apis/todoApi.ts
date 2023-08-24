import { AxiosPromise } from 'axios';
import { authInstance } from './axios';
import { Task } from '../types/todo';

export const getTodo = async (): AxiosPromise<Task[]> => {
  return authInstance.get('/todos');
};
