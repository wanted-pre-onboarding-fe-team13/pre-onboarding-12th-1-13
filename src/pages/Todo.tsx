import styled from 'styled-components';
import { useState, useMemo } from 'react';
import { useContextNullCheck } from '../hooks/useContextNullCheck';
import { TodoList } from '../components/Todo/TodoList';
import { NewTodoForm } from '../components/Todo';
import Button from '../components/Button';

export const Todo = () => {
  const { state: todos } = useContextNullCheck();
  const [isFormOpen, setOIsFormOpen] = useState(false);
  const notCompletedTodo = useMemo(() => {
    return todos.filter(i => !i.isCompleted).length;
  }, [todos]);

  return (
    <div>
      <p>할 일 {notCompletedTodo}개 남음</p>
      <TodoList todos={todos} />
      <FormOpenBtn onClick={() => setOIsFormOpen(!isFormOpen)}>+</FormOpenBtn>
      {isFormOpen && <NewTodoForm closeForm={() => setOIsFormOpen(!isFormOpen)} />}
    </div>
  );
};

const FormOpenBtn = styled(Button)`
  padding: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 45px;
  line-height: 45px;
  color: white;

  span {
    position: absolute;
    display: block;
    width: 25px;
    height: 3px;
    background: #fff;
  }

  & span:nth-child(1) {
    transform: rotate(90deg);
    left: 13px;
    top: 24px;
  }

  & span:nth-child(2) {
    left: 13px;
    top: 24px;
  }
`;
