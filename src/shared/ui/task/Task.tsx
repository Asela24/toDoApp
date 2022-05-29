import { FC } from 'react';
import useStyle from './Task.styles';

// eslint-disable-next-line no-use-before-define,react/function-component-definition
export const Task: FC<TaskProps> = ({
  title, timer, isFinished, isActive,
}) => {
  const classes = useStyle();
  return (
    <div className={classes.taskContainer}>
      <div className={classes.informContainer}>
        <div className={classes.taskTitle}>{title}</div>
          <div className={classes.taskTitle}>{timer}</div>
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
