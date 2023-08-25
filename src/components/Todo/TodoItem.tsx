import { useState } from 'react';

import styled from 'styled-components';

import { Task } from '../../types';

import { useTodoContext } from '../../hooks/useTodoContext';

import theme from '../../styles/theme';

import Button from '../Button';
import Input from '../Input';

export const TodoItem = (task: Task) => {
  const { todo, isCompleted } = task;
  const [isEditMode, setIsEditMode] = useState(false);
  const [EditedTodo, settEditedtodo] = useState(todo);

  const { dispatch } = useTodoContext();
  const { updateTask, deleteTask } = dispatch;

  const handleCheckTodo = async () => {
    try {
      await updateTask({ ...task, isCompleted: !isCompleted });
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateTodo = async () => {
    try {
      await updateTask({ ...task, todo: EditedTodo });
      setIsEditMode(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteTodo = async () => {
    try {
      await deleteTask(task);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <TodoItemWrap>
      <label>
        <StyledCheckbox type="checkbox" checked={isCompleted} onChange={handleCheckTodo} />
        {!isEditMode && <TodoTxt $isCompleted={isCompleted}>{todo}</TodoTxt>}
        {isEditMode && (
          <Input
            data-testid="modify-input"
            defaultValue={todo}
            onChange={e => settEditedtodo(e.target.value)}
            style={{ width: '74%', padding: '8px 10px', fontSize: '15px' }}
            variant="primary"
          />
        )}
      </label>
      {!isEditMode && (
        <div>
          <Button
            data-testid="modify-button"
            onClick={() => setIsEditMode(true)}
            style={{ marginRight: '5px' }}
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
        </div>
      )}
      {isEditMode && (
        <div>
          <Button
            data-testid="submit-button"
            onClick={handleUpdateTodo}
            style={{ marginRight: '5px' }}
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
        </div>
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
