import {combineReducers} from 'redux';

import {appReducer} from './app_redux/reducer';

export const allReducers = combineReducers({
  app: appReducer,
});

export type RootState = ReturnType<typeof allReducers>;
