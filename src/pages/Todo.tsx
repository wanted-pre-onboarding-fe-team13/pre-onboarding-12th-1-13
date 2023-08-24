import { useContext, useEffect } from 'react';
import { useContextNullCheck } from '../hooks/useContextNullCheck';
import { TodoDispatchContext, TodoStateContext } from '../context/TodoProvider/TodoProvider';
import { TodoList } from '../components/todo/TodoList';

interface Props {}

export const Todo = (props: Props) => {
  const { state: todos, dispatch } = useContextNullCheck();

  const { addTask, updateTask, deleteTask } = dispatch;

  return (
    <div>
      <p>할 일 {todos ? todos.length : 0}개 남음</p>
      <TodoList todos={todos} />
      {/* <AddTodoBtn onClick={} /> */}
    </div>
  );
};
