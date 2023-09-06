import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import counter from './reducers/counter';

const reducers = combineReducers({
  counter
});

const store = configureStore({
  reducer: reducers
});

export type StoreState = ReturnType<typeof store.getState>;
export default store;
export { reducers };
