import {useTodosStore} from "../../../models/todos/todosStore";
import {useControlsStore} from "../../../models/controls/controlsStore";

export const useControlsViewModel = () => {
    const { toggleShouldShowUndoneTodosOnly } = useTodosStore((store) => store.actions);

    const { activateDarkMode, activateLightMode, showTodosList, showTodosTable } = useControlsStore(
        (store) => store.actions
    );

    return {
        activateDarkMode,
        activateLightMode,
        showTodosList,
        showTodosTable,
        toggleShouldShowUndoneTodosOnly,
    }
}
