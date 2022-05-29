// eslint-disable-next-line no-use-before-define
// @ts-ignore
import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { Task } from './shared/ui/task'

function App() {
  return (
    <div className="App">
        <Task
        timer={100}
        title={'mytitle'}
        isActive
        isFinished
        />
    </div>
  );
}

export default App;
