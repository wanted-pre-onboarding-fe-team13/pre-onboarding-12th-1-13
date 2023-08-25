import styled from 'styled-components';
import theme from '../../styles/theme';
import { Task } from '../../types/todo';
import { TodoItem } from './TodoItem';

interface Props {
  todos: Task[];
}

export const TodoList = ({ todos }: Props) => {
  return (
    <TodoListWrap>
      {todos?.map(task => <TodoItem key={task.id} {...task} />)}
      {todos.length === 0 && <p>할 일이 없습니다.</p>}
    </TodoListWrap>
  );
};

const TodoListWrap = styled.ul`
  max-height: 400px;
  width: 100%;
  overflow-y: scroll;

  p {
    color: ${theme.color.grey300};
    text-align: center;
    margin-top: 160px;
  }
`;
