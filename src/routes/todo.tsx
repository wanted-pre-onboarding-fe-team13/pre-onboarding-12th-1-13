import { TodoProvider } from '../context/TodoProvider';
import TodoGuard from '../guards/Todoguard';
import { Todo } from '../pages/Todo';

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
