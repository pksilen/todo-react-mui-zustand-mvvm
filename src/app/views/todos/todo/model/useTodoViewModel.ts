import { useTodosStore } from 'app/models/todos/todosStore';

export const useTodoViewModel = (id: string) => {
  const editableTodoId = useTodosStore((store) => store.editableTodoId);
  const { editTodo, removeTodo, setTodoAsEditable, toggleTodoDone } = useTodosStore(
    (store) => store.actions
  );

  return {
    edit: editTodo(id),
    isEditable: editableTodoId === id,
    remove: () => removeTodo(id),
    setAsEditable: () => setTodoAsEditable(id),
    toggleDone: () => toggleTodoDone(id)
  };
};
