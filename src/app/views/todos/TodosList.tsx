import React from 'react';
import { Heading4 } from 'app/common/components/typography/Heading4';
import { Todo } from 'app/models/todos/Todo';
import { Pending } from '../../common/components/Pending';
import { List } from '../../common/components/list/List';
import classes from './Todos.module.scss';
import { useTodosViewModel } from './model/useTodosViewModel';
import { TodoListItem } from './todo/TodoListItem';


export const TodosList = () => {
  const { isPending, shownTodos } = useTodosViewModel();

  return (
    <Pending
      className={classes.todos}
      fallback={isPending && <Heading4>Loading todos...</Heading4>}
    >
      <List>
        {shownTodos.map((todo: Todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </List>
    </Pending>
  );
};
