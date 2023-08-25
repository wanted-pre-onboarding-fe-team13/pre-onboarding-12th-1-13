import styled from 'styled-components';
import { useMemo } from 'react';
import { useContextNullCheck } from '../hooks/useContextNullCheck';
import { NewTodoForm } from '../components/Todo/NewTodoForm';
import { TodoList } from '../components/Todo/TodoList';
import { getToday } from '../utils/date';
import theme from '../styles/theme';

export const Todo = () => {
  const { state: todos } = useContextNullCheck();
  const notCompletedTodo = useMemo(() => {
    return todos.filter(i => !i.isCompleted).length;
  }, [todos]);
  const { year, month, date, day } = getToday();

  return (
    <Container>
      <Title>
        {year}년 {month}월 {date}일 <p>{day}</p>
      </Title>
      <TodoSubTit>할 일 {notCompletedTodo}개 남음</TodoSubTit>
      <Divider />
      <TodoList todos={todos} />
      <NewTodoForm />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  width: 300px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const Title = styled.h1`
  width: 100%;
  font-size: 25px;
  text-align: left;

  p {
    margin: 10px 0 40px;
    font-size: 15px;
    color: ${theme.color.grey300};
  }
`;

const TodoSubTit = styled.p`
  width: 100%;
  font-size: 15px;
  text-align: left;
  color: ${theme.color.primary};
`;

const Divider = styled.hr`
  margin: 25px 0;
  width: 100%;
  height: 1px;
  background: ${theme.color.grey300};
  opacity: 0.4;
  border: 0;
`;
