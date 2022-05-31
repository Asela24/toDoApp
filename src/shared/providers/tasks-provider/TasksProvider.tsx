/* eslint-disable no-use-before-define */
import {
  createContext, FC, useContext, useState,
} from 'react';

import { TaskProps } from '../../ui/task';

const Context = createContext<ContextProps>({} as any);

const TaskProvider: FC = ({ children }) => {
  const [allTasks, setTasks] = useState<TaskProps[]>([]);
  const [isTasksFiltredByFinished, onChangeFiltredTasksList] = useState(false);

  const appendInWorkTask = (taskName: string) => setTasks([...allTasks, { title: taskName, timer: 0, id: new Date().valueOf() }]);
  const tasks = allTasks.filter((x) => x.isFinished === isTasksFiltredByFinished);
  const deleteTask = (id:number) => { setTasks(allTasks.filter((task) => task.id !== id)) }
  const inWorkTasksCount = allTasks.filter(task => !task.isFinished).length;
  const finishedTasksCount = allTasks.filter(task => task.isFinished).length;
  const  onCompleteTask = (id: number) => {setTasks(allTasks.map((task) => task.id === id ? { ...task, isFinished: true } : task )}

    return (
    <Context.Provider value={{ appendInWorkTask, tasks, deleteTask, inWorkTasksCount, finishedTasksCount, onCompleteTask }}>
      {children}
    </Context.Provider>
  );
};

interface ContextProps {
    tasks: TaskProps[],
    isTasksFiltredByFinished: boolean,
    onChangeFiltredTasksList: (value: boolean) => void,
    finishedTasksCount: number;
    inWorkTasksCount: number;
    appendInWorkTask: (taskName: string) => void
    deleteTask: (id: number) => void
    onCompleteTask: (id: number) => void
}
