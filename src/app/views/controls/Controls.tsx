import {
  IconRadioButtonGroup,
  IconRadioButtonProps
} from 'app/common/components/buttons/IconRadioButtonGroup';
import {
  DarkModeIcon,
  LightModeIcon,
  ListIcon,
  TableIcon
} from 'app/common/components/icons/Icons';
import { Switch } from 'app/common/components/switches/Switch';
import { ViewMode, ViewType } from 'app/models/controls/controlsStore';
import classes from './Controls.module.scss';
import { useControlsViewModel } from './model/useControlsViewModel';


export const Controls = () => {
  const vm = useControlsViewModel();

  const viewTypeButtons: IconRadioButtonProps<ViewType>[] = [
    { icon: <ListIcon />, onClick: vm.showTodosList, value: 'list' },
    { icon: <TableIcon />, onClick: vm.showTodosTable, value: 'table' }
  ];

  const viewModeButtons: IconRadioButtonProps<ViewMode>[] = [
    { icon: <LightModeIcon />, onClick: vm.activateLightMode, value: 'light' },
    { icon: <DarkModeIcon />, onClick: vm.activateDarkMode, value: 'dark' }
  ];

  return (
    <section className={classes.controls}>
      <IconRadioButtonGroup buttons={viewTypeButtons} initialValue="list" />
      <Switch label="Show undone only" onClick={vm.toggleShouldShowUndoneTodosOnly} />
      <IconRadioButtonGroup buttons={viewModeButtons} initialValue="dark" />
    </section>
  );
};
