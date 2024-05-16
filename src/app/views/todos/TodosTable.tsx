import React from 'react';
import { Pending } from 'app/common/components/Pending';
import { Table } from 'app/common/components/table/Table';
import { Heading4 } from 'app/common/components/typography/Heading4';
import { Todo } from 'app/models/todos/Todo';
import classes from './Todos.module.scss';
import { useTodosViewModel } from './model/useTodosViewModel';
import { TodoTableRow } from './todo/TodoTableRow';

export const TodosTable = () => {
  const vm = useTodosViewModel();

  return (
    <Pending
      className={classes.todos}
      fallback={vm.isPending && <Heading4>Loading todos...</Heading4>}
    >
      <Table>
        {vm.shownTodos.map((todo: Todo) => (
          <TodoTableRow key={todo.id} todo={todo} />
        ))}
      </Table>
    </Pending>
  );
};
