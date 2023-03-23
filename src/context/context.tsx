import React, {createContext, useReducer} from 'react';
import {initial_state, reducer} from './Store';
import {contextTypes} from './types';

type ContextType = {
  state?: contextTypes | unknown | any;
  send?: any;
};

export const Context = createContext<ContextType>({});

export const AppProvider = (props: any) => {
  const [state, send] = useReducer<any>(reducer, initial_state);
  return (
    <Context.Provider value={{send, state}}>{props.children}</Context.Provider>
  );
};
