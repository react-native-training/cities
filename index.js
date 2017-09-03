
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './app/reducers'

import Routes from './app/routes';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
) 

AppRegistry.registerComponent('cities', () => App);
