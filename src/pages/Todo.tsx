import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { useContextNullCheck } from '../hooks/useContextNullCheck';
import { TodoDispatchContext, TodoStateContext } from '../context/TodoProvider/TodoProvider';
import { TodoList } from '../components/todo/TodoList';
import { NewTodoForm } from '../components/todo';
import Button from '../components/Button';

export const Todo = () => {
  const { state: todos, dispatch } = useContextNullCheck();
  const { addTask, updateTask, deleteTask } = dispatch;
  const [isFormOpen, setOIsFormOpen] = useState(false);

  return (
    <div>
      <p>할 일 {todos ? todos.length : 0}개 남음</p>
      <TodoList todos={todos} />
      <FormOpenBtn onClick={() => setOIsFormOpen(!isFormOpen)}>
        <span />
        <span />
      </FormOpenBtn>
      {isFormOpen && <NewTodoForm closeForm={() => setOIsFormOpen(!isFormOpen)} />}
    </div>
  );
};

const FormOpenBtn = styled(Button)`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;

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
