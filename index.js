
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './app/reducers'

import Routes from './app/routes';

const store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
) 

AppRegistry.registerComponent('cities', () => App);
