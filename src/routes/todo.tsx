import { TodoProvider } from '../context/TodoProvider/TodoProvider';
import TodoGuard from '../guards/todo-guard';
import { Todo } from '../pages';

export const todoRoutes = [
  {
    path: '/todo',
    element: (
      <TodoGuard>
        <TodoProvider>
          <Todo />
        </TodoProvider>
      </TodoGuard>
    ),
  },
];
