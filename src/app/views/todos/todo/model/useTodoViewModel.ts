import { useTodosStore } from '../../../../models/todos/todosStore';

export const useTodoViewModel = () => {
  const editableTodoId = useTodosStore((store) => store.editableTodoId);
  const { editTodo, setEditableTodo, toggleTodoDone, removeTodo } = useTodosStore(
    (store) => store.actions
  );

  return {
    editableTodoId,
    editTodo,
    setEditableTodo,
    toggleTodoDone,
    removeTodo
  };
};
