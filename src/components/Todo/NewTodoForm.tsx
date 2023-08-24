import { ChangeEvent, KeyboardEvent, useState } from 'react';
import Input from '../Input';
import { useContextNullCheck } from '../../hooks/useContextNullCheck';

interface Props {
  closeForm: () => void;
}

export const NewTodoForm = ({ closeForm }: Props) => {
  const [newTodo, setNewTodo] = useState<string>('');
  const { dispatch } = useContextNullCheck();
  const { addTask } = dispatch;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTodo) {
      addTask(newTodo);
      setNewTodo('');
      closeForm();
    }
  };

  return (
    <Input
      style={{ width: '100%' }}
      placeholder="추가할 할 일을 입력하고 Enter를 누르세요."
      value={newTodo}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
