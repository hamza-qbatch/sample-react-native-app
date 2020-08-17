import { combineReducers } from 'redux';

import clients from './clients';
import counter from './counter';

export default combineReducers({
  clients,
  counter,
});
