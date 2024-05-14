import classNames from 'classnames';
import { CheckIcon, EditIcon, RemoveIcon, TodoIcon } from 'app/common/components/icons/Icons';
import { ListItem } from 'app/common/components/list/ListItem';
import { ListItemIcon } from 'app/common/components/list/ListItemIcon';
import { ListItemText } from 'app/common/components/list/ListItemText';
import { Todo } from 'app/models/todos/Todo';
import classes from './TodoListItem.module.scss';
import { TodoButton } from './button/TodoButton';
import { TodoTitleInput } from './input/TodoTitleInput';
import { useTodoViewModel } from './model/useTodoViewModel';


type Props = {
  readonly todo: Todo;
};

export const TodoListItem = ({ todo: { id, title, isDone } }: Props) => {
  const vm = useTodoViewModel();

  const titleClasses = classNames(classes.title, {
    [classes.isDone]: isDone
  });

  return (
    <ListItem className={classes.todo}>
      <ListItemIcon icon={<TodoIcon color={isDone ? 'success' : 'error'} />} />
      {vm.editableTodoId === id ? (
        <TodoTitleInput editTodo={vm.editTodo(id)} title={title} />
      ) : (
        <ListItemText
          className={titleClasses}
          onDoubleClick={() => vm.setEditableTodo(id)}
          text={title}
        />
      )}
      <div className={classes.buttons}>
        <TodoButton
          icon={<CheckIcon />}
          onClick={() => vm.toggleTodoDone(id)}
          text={isDone ? 'Mark undone' : 'Mark done'}
        />
        <TodoButton icon={<EditIcon />} onClick={() => vm.setEditableTodo(id)} text="Edit" />;
        <TodoButton icon={<RemoveIcon />} onClick={() => vm.removeTodo(id)} text="Remove" />
      </div>
    </ListItem>
  );
};
