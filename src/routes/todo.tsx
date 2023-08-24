import Todoguard from '../guards/Todoguard';
//Import Todoprovider
import { Todo } from '../pages';

export const todoRoutes = [
  {
    path: '/todo',
    element: (
      <Todoguard>
        {/* <TodoProvider> */}
        <Todo />
        {/* </TodoProvider> */}
      </Todoguard>
    ),
  },
];
