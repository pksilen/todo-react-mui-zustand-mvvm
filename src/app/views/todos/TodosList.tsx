import React from 'react';
import { Heading4 } from 'app/common/components/typography/Heading4';
import { Todo } from 'app/models/todos/Todo';
import { Pending } from 'app/common/components/Pending';
import { List } from 'app/common/components/list/List';
import classes from './Todos.module.scss';
import { useTodosViewModel } from './model/useTodosViewModel';
import { TodoListItem } from './todo/TodoListItem';

export const TodosList = () => {
  const vm = useTodosViewModel();

  return (
    <Pending
      className={classes.todos}
      fallback={vm.isPending && <Heading4>Loading todos...</Heading4>}
    >
      <List>
        {vm.shownTodos.map((todo: Todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </List>
    </Pending>
  );
};
