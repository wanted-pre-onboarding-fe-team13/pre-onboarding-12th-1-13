import { useState } from 'react';
import { useContextNullCheck } from '../hooks/useContextNullCheck';
import { NewTodoForm, TodoBtn, TodoList } from '../components/Todo';

interface Props {}

export const Todo = (props: Props) => {
  const { state: todos, dispatch } = useContextNullCheck();
  const [showForm, setShowForm] = useState(false);

  const { addTask, updateTask, deleteTask } = dispatch;

  return (
    <div>
      <p>할 일 {todos ? todos.length : 0}개 남음</p>
      <TodoList todos={todos} />
      {!showForm && <TodoBtn onClick={() => setShowForm(true)} />}
      {showForm && <NewTodoForm closeForm={() => setShowForm(false)} />}
    </div>
  );
};
