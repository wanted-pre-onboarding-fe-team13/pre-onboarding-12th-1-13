import { useState } from 'react';
import { Task } from '../../types/todo';
import { useContextNullCheck } from '../../hooks/useContextNullCheck';
import Button from '../Button';
import Input from '../Input';
import styled from 'styled-components';
import theme from '../../styles/theme';

export const TodoItem = (task: Task) => {
  const { todo, isCompleted } = task;
  const [isEditMode, setIsEditMode] = useState(false);
  const [EditedTodo, settEditedtodo] = useState(todo);

  const { dispatch } = useContextNullCheck();
  const { updateTask, deleteTask } = dispatch;

  const handelCheckTodo = async () => {
    try {
      await updateTask({ ...task, isCompleted: !isCompleted });
    } catch (e) {
      console.log(e);
    }
  };

  const handelUpdateTodo = async () => {
    try {
      await updateTask({ ...task, todo: EditedTodo });
      setIsEditMode(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteTodo = async () => {
    try {
      await deleteTask(task);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TodoItemWrap>
      <label>
        <StyledCheckbox type="checkbox" checked={isCompleted} onChange={handelCheckTodo} />
        {!isEditMode && <TodoTxt isCompleted={isCompleted}>{todo}</TodoTxt>}
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
            onClick={handelUpdateTodo}
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
  isCompleted: boolean;
};

const TodoItemWrap = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;

  label {
    display: flex;
    align-items: center;
    width: 68%;
  }
`;

const TodoTxt = styled.span<TodoTxtProps>`
  margin-left: 10px;
  font-size: 15px;
  color: ${({ isCompleted }) => (isCompleted ? theme.color.grey200 : theme.color.fontPrimary)};
  text-decoration: ${({ isCompleted }) => (isCompleted ? 'line-through' : 'none')};
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
