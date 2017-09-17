/*
* @providesModule @config/routes
*/

import React from 'react';
import { StackNavigator } from 'react-navigation';

import Cities from 'app/tabs/Cities/Cities';
import City from 'app/tabs/Cities/City';

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
