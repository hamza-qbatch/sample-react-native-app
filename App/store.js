import { createStore } from 'redux';

import appReducers from './reducers/index';

const rootReducers = (state, action) => {
  return appReducers(state, action);
};

let store = createStore(rootReducers);
export default store;
