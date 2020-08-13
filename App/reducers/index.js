import { combineReducers } from 'redux';

import clients from './clients';

const AppReducers = combineReducers({
  clients,
});

export default AppReducers;
