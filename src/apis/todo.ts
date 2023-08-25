import { axiosInstance } from './axios';

export const getTodos = async () => {
  const { data } = await axiosInstance.get('/todos');
  return data;
};

export const createTodo = async (todo: string) => {
  const { data } = await axiosInstance.post(
    '/todos',
    { todo: todo },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return data;
};

export const updateTodo = async (id: number, todo: string, isCompleted: boolean) => {
  const { data } = await axiosInstance.put(
    `/todos/${id}`,
    { todo: todo, isCompleted: isCompleted },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return data;
};

export const deleteTodo = async (id: number) => {
  await axiosInstance.delete(`todos/${id}`);
};
