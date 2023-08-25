import { ReactNode, createContext, useEffect, useState } from 'react';

import { Task } from '../types/todo';

import { createTodo, deleteTodo, getTodos, updateTodo } from '../apis/todoApi';

interface TodoDispatch {
  addTask: (content: string) => void;
  updateTask: (todo: Task) => void;
  deleteTask: (todo: Task) => void;
}

export const TodoStateContext = createContext<Task[] | null>(null);
export const TodoDispatchContext = createContext<TodoDispatch | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todoState, setTodoState] = useState<Task[]>([]);
  const dispatch: TodoDispatch = {
    addTask,
    updateTask,
    deleteTask,
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodoState(data);
    return data;
  };

  async function addTask(content: string) {
    await createTodo(content);
    fetchTodos();
  }

  async function updateTask(todo: Task) {
    const { id, todo: content, isCompleted } = todo;
    await updateTodo(id, content, isCompleted);
    fetchTodos();
  }

  async function deleteTask(todo: Task) {
    const { id } = todo;
    await deleteTodo(id);
    fetchTodos();
  }

  return (
    <TodoStateContext.Provider value={todoState}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
