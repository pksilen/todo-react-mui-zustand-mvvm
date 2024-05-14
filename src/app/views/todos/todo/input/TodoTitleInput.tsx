import { KeyboardEvent, useState } from 'react';
import { TextInput } from 'app/common/components/inputs/TextInput';
import classes from './TodoTitleInput.module.scss';


type Props = {
  readonly editTodo: (newTitle: string) => void;
  readonly title: string;
};

export const TodoTitleInput = ({ editTodo, title }: Props) => {
  const [editedTodoTitle, setEditedTodoTitle] = useState(title);

  const updateTodo = () => {
    editTodo(editedTodoTitle);
  };

  const handleInputKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      editTodo(title);
    } else if (event.key === 'Enter') {
      updateTodo();
    }
  };

  const handleInputBlur = () => {
    updateTodo();
  };

  return (
    <TextInput
      autoFocus
      className={classes.titleInput}
      inputProps={{ onBlur: handleInputBlur, onKeyDown: handleInputKeyDown }}
      onChange={(event) => setEditedTodoTitle(event.target.value)}
      value={editedTodoTitle}
    />
  );
};
