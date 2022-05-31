import { FC } from 'react';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import PauseOutlinedIcon from '@material-ui/icons/PauseOutlined';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import useStyle from './Task.styles';

// eslint-disable-next-line no-use-before-define,react/function-component-definition
export const Task: FC<TaskProps> = ({
  title, timer, isFinished = false, isActive = false,
}) => {
  const classes = useStyle();
  const convertTime = () => {
    const sec = timer % 60;
    const hours = Math.floor(timer / 60 / 60);
    const min = Math.floor(timer / 60) - (hours * 60);
    return [
      hours.toString().padStart(2, '0'),
      min.toString().padStart(2, '0'),
      sec.toString().padStart(2, '0'),
    ].join(':');
  };
  return (
    <div className={classes.taskContainer}>
      <div className={classes.informContainer}>
        <div className={classes.taskTitle}>{title}</div>
        <div className={classes.taskTimer}>{convertTime()}</div>
      </div>
      <div className={classes.actionsContainer}>
        {isActive ? <PlayArrowOutlinedIcon fontSize="inherit" color="action" /> : <PauseOutlinedIcon fontSize="inherit" />}
        {isFinished ? <DoneOutlinedIcon fontSize="inherit" /> : <CloseOutlinedIcon fontSize="inherit" /> }
      </div>
    </div>
  );
};

interface TaskProps {
    title: string,
    timer: number,
    // eslint-disable-next-line max-len
    isFinished?: boolean, // false - Показать кнопку запуска и завершения / true - показать кнопку удаления
    isActive?: boolean, // false - кнопка старта / true - кнопка паузы
}
