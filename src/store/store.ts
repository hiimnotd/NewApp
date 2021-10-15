import {configureStore} from '@reduxjs/toolkit';

import {allReducers} from './allReducer';

const devMode = __DEV__;

const storeConfig = () => {
  const store = configureStore({
    reducer: allReducers,
    devTools: devMode,
  });
  return store;
};
export const store = storeConfig();
