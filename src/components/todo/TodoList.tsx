import { Task } from '../../types/todo';
import { TodoItem } from './Todoitem';

interface Props {
  todos: Task[];
}

export const TodoList = ({ todos }: Props) => {
  return (
    <ul>
      {todos?.map(task => <TodoItem {...task} />)}
      {!todos && <p>할 일이 없습니다.</p>}
    </ul>
  );
};
