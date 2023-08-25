import styled from 'styled-components';

import { Task } from '../../types/todo';

import theme from '../../styles/theme';

import { TodoItem } from './TodoItem';

interface Props {
  todos: Task[];
}

export const TodoList = ({ todos }: Props) => {
  return (
    <TodoListWrap>
      {todos?.map(task => <TodoItem key={task.id} {...task} />)}
      {todos.length === 0 && <NoTodoTxt>할 일이 없습니다.</NoTodoTxt>}
    </TodoListWrap>
  );
};

const TodoListWrap = styled.ul`
  position: relative;
  height: 400px;
  width: 100%;
  overflow: auto;
`;

const NoTodoTxt = styled.li`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.color.grey300};
`;
