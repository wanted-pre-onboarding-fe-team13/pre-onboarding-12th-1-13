import { authInstance } from './axios';

export const getTodos = async () => {
  try {
    const { data } = await authInstance.get('/todos');
    return data;
  } catch (err) {
    return;
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
    return;
  }
};

export const updateTodo = async (id: number, todo: string, isCompleted: boolean) => {
  try {
    const { data } = await authInstance.put(
      `/todos/${id}`,
      { todo: todo, isCompleted: isCompleted },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return data;
  } catch (err) {
    return;
  }
};

export const deleteTodo = async (id: number) => {
  try {
    await authInstance.delete(`todos/${id}`);
  } catch (err) {
    return;
  }
};
