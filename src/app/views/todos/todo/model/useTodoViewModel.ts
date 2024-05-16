import { useTodosStore } from 'app/models/todos/todosStore';

export const useTodoViewModel = () => {
  const editableTodoId = useTodosStore((store) => store.editableTodoId);
  const { editTodo, removeTodo, setEditableTodo, toggleTodoDone } = useTodosStore(
    (store) => store.actions
  );

  return {
    editableTodoId,
    editTodo,
    removeTodo,
    setEditableTodo,
    toggleTodoDone
  };
};
