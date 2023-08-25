import { ChangeEvent, MouseEventHandler, KeyboardEvent, useState } from 'react';

import styled from 'styled-components';

import { useContextNullCheck } from '../../hooks/useContextNullCheck';

import Input from '../Input';
import Button from '../Button';

export const NewTodoForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newTodo, setNewTodo] = useState<string>('');
  const { dispatch } = useContextNullCheck();
  const { addTask } = dispatch;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    try {
      if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
        e.preventDefault();
        if (!newTodo) {
          return;
        }
        addTask(newTodo);
        setIsFormOpen(false);
        setNewTodo('');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmitNewTodo: MouseEventHandler<HTMLButtonElement> = e => {
    if (!isFormOpen) {
      setIsFormOpen(true);
    } else {
      try {
        if (newTodo) {
          addTask(newTodo);
          setNewTodo('');
          setIsFormOpen(false);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <NewTodoContainer>
      {isFormOpen && (
        <Input
          data-testid="new-todo-input"
          style={{ width: '67%' }}
          variant="primary"
          inputSize="large"
          placeholder="추가할 할 일을 입력해주세요."
          value={newTodo}
          onChange={onChange}
          onKeyDown={onKeyDown}
          autoFocus
        />
      )}
      <AddTodoBtn type="button" data-testid="new-todo-add-button" onClick={handleSubmitNewTodo}>
        +
      </AddTodoBtn>
    </NewTodoContainer>
  );
};

const NewTodoContainer = styled.form`
  width: 90%;
  position: absolute;
  left: 50%;
  bottom: 17px;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const AddTodoBtn = styled(Button)`
  padding: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: 45px;
  line-height: 46px;
  color: white;
`;
