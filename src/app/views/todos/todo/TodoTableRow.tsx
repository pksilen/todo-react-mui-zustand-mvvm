import classNames from 'classnames';
import { IconButton } from 'app/common/components/buttons/IconButton';
import { Checkbox } from 'app/common/components/inputs/Checkbox';
import { TableCell } from 'app/common/components/table/TableCell';
import { TableRow } from 'app/common/components/table/TableRow';
import { Todo } from 'app/models/todos/Todo';
import { EditIcon, RemoveIcon } from 'app/common/components/icons/Icons';
import { EditTextInput } from 'app/common/components/inputs/EditTextInput';
import classes from './TodoTableRow.module.scss';
import { useTodoViewModel } from './model/useTodoViewModel';

type Props = {
  readonly todo: Todo;
};

export const TodoTableRow = ({ todo: { id, title, isDone } }: Props) => {
  const vm = useTodoViewModel();
  const titleClasses = classNames(classes.title, isDone && classes.isDone);

  return (
    <TableRow>
      <TableCell>
        <Checkbox
          aria-label={title}
          isChecked={isDone}
          color="success"
          onChange={() => vm.toggleTodoDone(id)}
        />
      </TableCell>
      {vm.editableTodoId === id ? (
        <TableCell>
          <EditTextInput onEditComplete={vm.editTodo(id)} text={title} />
        </TableCell>
      ) : (
        <TableCell className={titleClasses} onDoubleClick={() => vm.setEditableTodo(id)}>
          {title}
        </TableCell>
      )}
      <TableCell className={classes.buttons}>
        <IconButton icon={<EditIcon />} onClick={() => vm.setEditableTodo(id)} />
        <IconButton icon={<RemoveIcon />} onClick={() => vm.removeTodo(id)} />
      </TableCell>
    </TableRow>
  );
};
