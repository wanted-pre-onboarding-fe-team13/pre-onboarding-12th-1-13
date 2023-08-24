import { authInstance } from './axios';

export const getTodos = async () => {
  try {
    const { data } = await authInstance.get('/todos');
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createTodo = async (todo: string) => {
  try {
    const { data } = await authInstance.post(
      '/todos',
      { todo: todo },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
