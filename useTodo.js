import { useEffect, useReducer } from 'react';
import { todoReducer } from '../Reducer/todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};
export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add',
      payload: todo,
    };
    dispatch(action);
  };
  const handleRemoveTodo = (id) => {
    dispatch({
      type: '[TODO] Remove',
      payload: id,
    });
  };
  const handleToggleTodo = (id) => {
    dispatch({
      type: '[TODO] ToggleTodo',
      payload: id,
    });
  };
  return {
    todosCount: todos.length,
    pendingTodoCount: todos.filter((todo) => !todo.done).length,
    todos,
    handleToggleTodo,
    handleNewTodo,
    handleRemoveTodo,
  };
};
