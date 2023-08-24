import { useContext, useEffect } from 'react';
import { useContextNullCheck } from '../hooks/useContextNullCheck';
import { TodoDispatchContext, TodoStateContext } from '../context/TodoProvider/TodoProvider';

interface Props {}

export const Todo = (props: Props) => {
  const { state: todos, dispatch } = useContextNullCheck();

  const { addTask, updateTask, deleteTask } = dispatch;

  return (
    <div>
      <p>할 일 {todos.length}개 남음</p>
      {todos?.map(({ id, ...data }) => <p key={id}>{data.todo}</p>)}
      {/* <AddTodoBtn onClick={} /> */}
    </div>
  );
};
