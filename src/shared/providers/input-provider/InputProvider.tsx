/* eslint-disable no-use-before-define */
import {
  createContext, FC, useContext, useState,
} from 'react';

const Context = createContext<ContextProps>({
  value: '',
  onChangeValue: (f) => f,
});

const InputProvider: FC = ({ children }) => {
  const [value, onChangeValue] = useState('');
  return (
    <Context.Provider value={{ value, onChangeValue }}>
      {children}
    </Context.Provider>
  );
};

interface ContextProps {
    value: string,
    onChangeValue: (value: string) => void,
}
