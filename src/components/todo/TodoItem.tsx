import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';

interface Props {}

export const TodoItem = (props: Props) => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <li>
      <label>
        <input type="checkbox" />
        {!isEditMode && <span>할일 목록</span>}
        {isEditMode && <Input data-testid="modify-input" />}
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
