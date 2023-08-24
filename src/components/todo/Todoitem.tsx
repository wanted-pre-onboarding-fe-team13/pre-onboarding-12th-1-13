import { useState } from 'react';
import { Task } from '../../types/todo';
import { useContextNullCheck } from '../../hooks/useContextNullCheck';
import Button from '../Button';
import Input from '../Input';

export const TodoItem = (task: Task) => {
  const { todo } = task;

  const [editedTodo, seteditedTodo] = useState<Task>(task);
  const [isEditMode, setIsEditMode] = useState(false);
  const { dispatch } = useContextNullCheck();
  const { updateTask } = dispatch;

  const handelCheck = async () => {
    try {
      await updateTask(task);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <li>
      <label>
        <input type="checkbox" checked={editedTodo.isCompleted} onChange={handelCheck} />
        {!isEditMode && <span>{todo}</span>}
        {isEditMode && <Input data-testid="modify-input" defaultValue={todo} />}
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
          <Button data-testid="submit-button">제출</Button>
          <Button data-testid="cancel-button" onClick={() => setIsEditMode(false)}>
            취소
          </Button>
        </>
      )}
    </li>
  );
};
