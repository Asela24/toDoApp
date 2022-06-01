/* eslint-disable no-use-before-define */
import TextField from '@material-ui/core/TextField';
import React, { FC } from 'react';
import classNames from 'classnames';
import { Paper, Tabs } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import { Task } from '../../shared/ui/task';
import useStyles from './MainPage.styles';

// eslint-disable-next-line import/prefer-default-export
export const MainPage: FC = () => {
  const classes = useStyles();
  const todayDate = new Date().toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });
  const [value, setValue] = React.useState(0);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className={classNames(classes.container)}>
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue={todayDate}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="standard-basic" label="Task" className={classes.textField} />
      </div>
      <Paper className={classes.paperStyle}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Активные задачи" />
          <Tab label="Завершенные задачи" />
        </Tabs>
      </Paper>
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
