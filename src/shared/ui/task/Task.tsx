import { FC } from 'react';
import useStyle from './Task.styles';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import PauseOutlinedIcon from '@material-ui/icons/PauseOutlined';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

// eslint-disable-next-line no-use-before-define,react/function-component-definition
export const Task: FC<TaskProps> = ({
  title, timer, isFinished = false, isActive = false,
}) => {
  const classes = useStyle();
    return (
    <div className={classes.taskContainer}>
      <div className={classes.informContainer}>
          <div className={classes.taskTitle}>{title}</div>
          <div className={classes.taskTimer}>{timer}</div>
      </div>
        <div className={classes.actionsContainer}>
            {isActive ? <PlayArrowOutlinedIcon fontSize='inherit' color='action'/> : <PauseOutlinedIcon fontSize='inherit'/>}
            {isFinished ? <DoneOutlinedIcon fontSize='inherit'/> : <CloseOutlinedIcon fontSize='inherit' /> }
        </div>
    </div>
  );
};

interface TaskProps {
    title: string,
    timer: number,
    // eslint-disable-next-line max-len
    isFinished: boolean, // false - Показать кнопку запуска и завершения / true - показать кнопку удаления
    isActive: boolean, // false - кнопка старта / true - кнопка паузы
}
