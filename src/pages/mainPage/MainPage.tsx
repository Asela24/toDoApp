/* eslint-disable no-use-before-define */
import TextField from '@material-ui/core/TextField';
import React, { FC } from 'react';
import classNames from 'classnames';
import { Task } from '../../shared/ui/task';
import useStyles from './MainPage.styles';
import { CommonStyles } from '../../styles/Common.styles';

// eslint-disable-next-line import/prefer-default-export
export const MainPage: FC = () => {
  const classes = useStyles();
  const commonStyle = CommonStyles();
  const todayDate = new Date().toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

  return (
    <div>
      <div className={classNames(classes.container, commonStyle.containerStyles)}>
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue={todayDate}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className={classNames(classes.container, commonStyle.containerStyles)}>
        <TextField id="standard-basic" label="Task" className={classes.inputField} />
      </div>
      <Task
        timer={100}
        title="mytitle"
        isActive
        isFinished
        id={0}
      />
    </div>
  );
};
