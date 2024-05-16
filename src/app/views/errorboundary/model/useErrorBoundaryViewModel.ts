import { useTodosStore } from 'app/models/todos/todosStore';

export const useErrorBoundaryViewModel = () => {
  const hasError = useTodosStore((store) => store.hasError);
  const { clearError } = useTodosStore((store) => store.actions);
  return { clearError, hasError };
};
