import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import store from './App/store/index';
import App from './App';

const AwesomeProject = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
