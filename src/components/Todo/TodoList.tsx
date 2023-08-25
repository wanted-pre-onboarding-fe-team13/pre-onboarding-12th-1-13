import styled from 'styled-components';

import { Task } from '../../types';

import theme from '../../styles/theme';

import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Task[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <TodoListWrap>
        <EmptyTodoTxt>할 일이 없습니다.</EmptyTodoTxt>
      </TodoListWrap>
    );
  }

  return <TodoListWrap>{todos?.map(task => <TodoItem key={task.id} task={task} />)}</TodoListWrap>;
};

const TodoListWrap = styled.ul`
  position: relative;
  height: 400px;
  width: 100%;
  overflow: auto;
`;

const EmptyTodoTxt = styled.li`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.color.grey300};
`;
