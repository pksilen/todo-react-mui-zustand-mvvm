import classNames from 'classnames';
import { IconOrButton } from 'app/common/components/buttons/IconOrButton';
import { CheckIcon, EditIcon, RemoveIcon, TodoIcon } from 'app/common/components/icons/Icons';
import { EditTextInput } from 'app/common/components/inputs/EditTextInput';
import { ListItem } from 'app/common/components/list/ListItem';
import { ListItemIcon } from 'app/common/components/list/ListItemIcon';
import { ListItemText } from 'app/common/components/list/ListItemText';
import { Todo } from 'app/models/todos/Todo';
import classes from './TodoListItem.module.scss';
import { useTodoViewModel } from './model/useTodoViewModel';

type Props = {
  readonly todo: Todo;
};

export const TodoListItem = ({ todo: { id, title, isDone } }: Props) => {
  const vm = useTodoViewModel(id);
  const titleClasses = classNames(classes.title, isDone && classes.isDone);

  return (
    <ListItem className={classes.todo}>
      <ListItemIcon icon={<TodoIcon color={isDone ? 'success' : 'error'} />} />
      {vm.isEditable ? (
        <EditTextInput aria-label="Edit todo" onEditComplete={vm.edit} text={title} />
      ) : (
        <ListItemText className={titleClasses} onDoubleClick={vm.setAsEditable} text={title} />
      )}
      <div className={classes.buttons}>
        <IconOrButton
          icon={<CheckIcon />}
          onClick={vm.toggleDone}
          text={isDone ? 'Mark undone' : 'Mark done'}
        />
        <IconOrButton icon={<EditIcon />} onClick={vm.setAsEditable} text="Edit" />
        <IconOrButton icon={<RemoveIcon />} onClick={vm.remove} text="Remove" />
      </div>
    </ListItem>
  );
};
