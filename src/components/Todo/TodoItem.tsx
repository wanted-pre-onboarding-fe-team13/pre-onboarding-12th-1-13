import { useState } from 'react';

import styled from 'styled-components';

import { Task } from '../../types';

import { useTodoContext } from '../../hooks/useTodoContext';

import theme from '../../styles/theme';

import Button from '../Button';
import Input from '../Input';

interface TodoItemProps {
  task: Task;
}

export const TodoItem = ({ task }: TodoItemProps) => {
  const { todo, isCompleted } = task;

  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const { dispatch } = useTodoContext();

  const { updateTask, deleteTask } = dispatch;

  const handleCheckTodo = () => {
    try {
      updateTask({ ...task, isCompleted: !isCompleted });
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateTodo = () => {
    try {
      updateTask({ ...task, todo: editedTodo });
      setIsEditMode(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteTodo = () => {
    try {
      deleteTask(task);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <TodoItemWrap>
      {!isEditMode && (
        <>
          <label>
            <StyledCheckbox type="checkbox" checked={isCompleted} onChange={handleCheckTodo} />
            <TodoTxt $isCompleted={isCompleted}>{todo}</TodoTxt>
          </label>
          <ButtonContainer>
            <Button
              data-testid="modify-button"
              onClick={() => setIsEditMode(true)}
              size="small"
              variant="secondary"
            >
              수정
            </Button>
            <Button
              data-testid="delete-button"
              onClick={handleDeleteTodo}
              size="small"
              variant="secondary"
            >
              삭제
            </Button>
          </ButtonContainer>
        </>
      )}

      {isEditMode && (
        <>
          <label>
            <StyledCheckbox type="checkbox" checked={isCompleted} onChange={handleCheckTodo} />
            <Input
              type="text"
              data-testid="modify-input"
              defaultValue={todo}
              onChange={e => setEditedTodo(e.target.value)}
              variant="primary"
            />
          </label>
          <ButtonContainer>
            <Button
              data-testid="submit-button"
              onClick={handleUpdateTodo}
              size="small"
              variant="secondary"
            >
              제출
            </Button>
            <Button
              data-testid="cancel-button"
              onClick={() => setIsEditMode(false)}
              size="small"
              variant="secondary"
            >
              취소
            </Button>
          </ButtonContainer>
        </>
      )}
    </TodoItemWrap>
  );
};

type TodoTxtProps = {
  $isCompleted: boolean;
};

const TodoItemWrap = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;

  label {
    display: flex;
    align-items: center;
    width: 68%;

    input[type='text'] {
      width: 74%;
      padding: 8px 10px;
      font-size: 15px;
    }
  }
`;

const TodoTxt = styled.span<TodoTxtProps>`
  width: 150px;
  margin-left: 10px;
  font-size: 15px;
  color: ${({ $isCompleted }) => ($isCompleted ? theme.color.grey200 : theme.color.fontPrimary)};
  text-decoration: ${({ $isCompleted }) => ($isCompleted ? 'line-through' : 'none')};
  word-break: break-word;
`;

const StyledCheckbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  background-image: url('/images/checkIcon.png');
  background-size: cover;
  cursor: pointer;

  &:checked {
    background-position: 20px 0;
  }
`;

const ButtonContainer = styled.div`
  button:nth-of-type(1) {
    margin-right: 5px;
  }
`;
