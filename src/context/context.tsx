import React, {createContext, useEffect, useReducer} from 'react';
import {initial_state, reducer} from './Store';
import {contextTypes} from './types';
import {getData} from './actions';

type ContextType = {
  state?: contextTypes | unknown | any;
  send?: any;
};

export const Context = createContext<ContextType>({});

export const AppProvider = (props: any) => {
  const [state, send] = useReducer<any>(reducer, initial_state);

  const fetchuserdata = async () => {
    const userdata = await getData();
    const data = !!userdata ? JSON.parse(userdata) : initial_state;


    //@ts-ignore
    send({
      type: 'LOGIN_SUCCESS',
      payload: {
        user_data: data.user_data,
        online: data.online,
      },
    });
  };

  useEffect(() => {
    fetchuserdata();
  }, []);

  return (
    <Context.Provider value={{send, state}}>{props.children}</Context.Provider>
  );
};
