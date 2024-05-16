import { getUndoneTodoCount } from 'app/models/todos/todoSelectors';
import { useTodosStore } from 'app/models/todos/todosStore';

export const useHeaderViewModel = () => {
  const undoneTodoCount = useTodosStore((store) => getUndoneTodoCount(store));
  const { setTodoFilter } = useTodosStore((store) => store.actions);
  return { setTodoFilter, undoneTodoCount };
};
