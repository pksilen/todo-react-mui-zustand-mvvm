import { getUndoneTodoCount } from '../../../models/todos/todoSelectors';
import { useTodosStore } from '../../../models/todos/todosStore';

export const useHeaderViewModel = () => {
  const undoneTodoCount = useTodosStore((store) => getUndoneTodoCount(store));
  const { setTodoFilter } = useTodosStore((store) => store.actions);
  return { setTodoFilter, undoneTodoCount };
};
