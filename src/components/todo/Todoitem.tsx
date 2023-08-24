import { useState } from 'react';
import { Task } from '../../types/todo';
import { useContextNullCheck } from '../../hooks/useContextNullCheck';
import Button from '../Button';
import Input from '../Input';

export const TodoItem = (task: Task) => {
  const { todo, isCompleted } = task;

  const [isEditMode, setIsEditMode] = useState(false);
  const [EditedTodo, settEditedtodo] = useState(todo);
  const { dispatch } = useContextNullCheck();
  const { updateTask } = dispatch;

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

  return (
    <li>
      <label>
        <input type="checkbox" checked={isCompleted} onChange={handelCheckTodo} />
        {!isEditMode && <span>{todo}</span>}
        {isEditMode && (
          <Input
            data-testid="modify-input"
            defaultValue={todo}
            onChange={e => settEditedtodo(e.target.value)}
          />
        )}
      </label>
      {!isEditMode && (
        <>
          <Button data-testid="modify-button" onClick={() => setIsEditMode(true)}>
            수정
          </Button>
          <Button data-testid="delete-button">삭제</Button>
        </>
      )}
      {isEditMode && (
        <>
          <Button data-testid="submit-button" onClick={handelUpdateTodo}>
            제출
          </Button>
          <Button data-testid="cancel-button" onClick={() => setIsEditMode(false)}>
            취소
          </Button>
        </>
      )}
    </li>
  );
};
