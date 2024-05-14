import { CssBaseline, ThemeProvider } from '@mui/material';
import { useControlsStore } from 'app/models/controls/controlsStore';
import { AddTodo } from 'app/views/addtodo/AddTodo';
import { Controls } from 'app/views/controls/Controls';
import { ErrorBoundary } from 'app/views/errorboundary/ErrorBoundary';
import { Header } from 'app/views/header/Header';
import classes from './App.module.scss';
import { TodosList } from './views/todos/TodosList';
import { TodosTable } from './views/todos/TodosTable';


export default function App() {
  const theme = useControlsStore((store) => store.theme);
  const viewType = useControlsStore((store) => store.viewType);

  return (
    <main className={classes.main}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Controls />
        <ErrorBoundary>
          {viewType == 'list' ? <TodosList /> : <TodosTable />}
          <AddTodo />
        </ErrorBoundary>
      </ThemeProvider>
    </main>
  );
}
