/*
* @providesModule @config/routes
*/

import React from 'react';
import { StackNavigator } from 'react-navigation';

import Cities from '../tabs/Cities/Cities';
import City from '../tabs/Cities/City';

const Routes = {
  Cities: { screen: Cities },
  City: { screen: City }
}

const RouteConfig = {
  navigationOptions: {
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#9C27B0' }
  } 
}

export {
  Routes,
  RouteConfig,
};
