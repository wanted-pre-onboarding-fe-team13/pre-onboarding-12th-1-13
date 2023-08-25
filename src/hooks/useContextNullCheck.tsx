import { useContext } from 'react';
import { TodoDispatchContext, TodoStateContext } from '../context/TodoProvider/TodoProvider';

export const useContextNullCheck = () => {
  const state = useContext(TodoStateContext);
  const dispatch = useContext(TodoDispatchContext);

  if (state === null) throw new Error('Cannot find TodoState');
  if (dispatch === null) throw new Error('Cannot find TodoDispatch');

  return { state, dispatch };
};
