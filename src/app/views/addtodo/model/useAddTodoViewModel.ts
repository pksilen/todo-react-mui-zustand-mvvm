import { useState } from 'react';
import { useTodosStore } from 'app/models/todos/todosStore';

export const useAddTodoViewModel = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const { addTodo } = useTodosStore((store) => store.actions);

  const maybeAddTodo = () => {
    if (todoTitle) {
      addTodo(todoTitle);
      setTodoTitle('');
    }
  };

  return { maybeAddTodo, setTodoTitle, todoTitle };
};
