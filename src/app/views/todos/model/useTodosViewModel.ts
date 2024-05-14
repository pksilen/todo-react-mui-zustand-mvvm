import { afterMount } from 'app/common/hooks/afterMount';
import { getShownTodos } from 'app/models/todos/todoSelectors';
import { useTodosStore } from 'app/models/todos/todosStore';


export const useTodosViewModel = () => {
  const { isPending, shownTodos } = useTodosStore((store) => ({
    isPending: store.isPending,
    shownTodos: getShownTodos(store)
  }));

  const { fetchTodos } = useTodosStore((store) => store.actions);
  afterMount(fetchTodos);

  return {
    isPending,
    shownTodos
  };
};
