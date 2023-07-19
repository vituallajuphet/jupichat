import {storeData} from './actions';
import {TReducerAction, contextTypes} from './types';



export const initial_state: contextTypes = {
  user_data: undefined,
  online: false,
};

export const reducer = (state: contextTypes, action: TReducerAction<any>) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      const {online, user_data} = action.payload;
      const data = {...state, online, user_data};
      storeData(data);
      return data;
    case 'GET_USERDATA':
      return user_data;
  }
};
