import { ChangeEvent, KeyboardEvent, MouseEventHandler, useState } from 'react';

import styled from 'styled-components';

import { useTodoContext } from '../../hooks/useTodoContext';

import Input from '../Input';
import Button from '../Button';

export const NewTodoForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  const { dispatch } = useTodoContext();

  const { addTask } = dispatch;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    try {
      if (event.key === 'Enter' && event.nativeEvent.isComposing === false) {
        event.preventDefault();

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

      return;
    }

    try {
      if (newTodo) {
        addTask(newTodo);

        setIsFormOpen(false);
        setNewTodo('');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <NewTodoContainer>
      {isFormOpen && (
        <Input
          data-testid="new-todo-input"
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

  input {
    width: 67%;
  }
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
