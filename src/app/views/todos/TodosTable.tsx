import React from 'react';
import { Heading4 } from 'app/common/components/typography/Heading4';
import { Todo } from 'app/models/todos/Todo';
import { Pending } from '../../common/components/Pending';
import { Table } from '../../common/components/table/Table';
import classes from './Todos.module.scss';
import { useTodosViewModel } from './model/useTodosViewModel';
import { TodoTableRow } from './todo/TodoTableRow';


export const TodosTable = () => {
  const { isPending, shownTodos } = useTodosViewModel();

  return (
    <Pending
      className={classes.todos}
      fallback={isPending && <Heading4>Loading todos...</Heading4>}
    >
      <Table>
        {shownTodos.map((todo: Todo) => (
          <TodoTableRow key={todo.id} todo={todo} />
        ))}
      </Table>
    </Pending>
  );
};
