export interface userType {
  uuid: string;
  firstname: string;
  lastname: string;
  token: string;
  username: string;
  email: string;
  typingState?: 'writing' | 'none';
}

export interface contextTypes {
  user_data?: userType;
  online?: boolean;
}

export type TReducerAction<IState> = {
  type: string;
  payload?: IState;
  error?: any;
};

export type ReducerState = Record<any, any>;

export type ReducerType<IState> = React.Reducer<
  ReducerState,
  TReducerAction<IState>
>;
