export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] Add':
      return [...initialState, action.payload];
    case '[TODO] Remove':
      return initialState.filter((todo) => todo.id !== action.payload);
    case '[TODO] ToggleTodo':
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    default:
      return initialState;
  }
};