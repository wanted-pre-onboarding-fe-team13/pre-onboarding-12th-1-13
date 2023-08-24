import { TodoProvider } from '../context/TodoProvider/TodoProvider';
import { Todo } from '../pages';

export const todoRoutes = [
  {
    path: '/todo',
    element: (
      <TodoProvider>
        <Todo />
      </TodoProvider>
    ),
  },
];
