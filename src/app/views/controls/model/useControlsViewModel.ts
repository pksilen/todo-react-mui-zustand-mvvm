import { useControlsStore } from 'app/models/controls/controlsStore';
import { useTodosStore } from 'app/models/todos/todosStore';

export const useControlsViewModel = () => {
  const { toggleShouldShowUndoneTodosOnly } = useTodosStore((store) => store.actions);
  const { setViewMode, setViewType } = useControlsStore((store) => store.actions);

  return {
    setViewMode,
    setViewType,
    toggleShouldShowUndoneTodosOnly
  };
};
