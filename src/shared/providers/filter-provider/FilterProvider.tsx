/* eslint-disable no-use-before-define */
import {
  createContext, FC, useContext, useState,
} from 'react';

const CURRENT_DATE = new Date();
const Context = createContext<ContextProps>({
  value: CURRENT_DATE,
  onChangeFilterValue: (f: Date) => f,

});

const FilterProvider: FC = ({ children }) => {
  const [value, onChangeFilterValue] = useState(CURRENT_DATE);
  return (
    <Context.Provider value={{ value, onChangeFilterValue }}>
      {children}
    </Context.Provider>
  );
};

interface ContextProps {
    value: Date,
    onChangeFilterValue: (value: Date) => void,
}
