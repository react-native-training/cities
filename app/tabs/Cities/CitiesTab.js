import React from 'react';
import { View, Text, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Cities from './Cities';
import City from './City';

const RouteConfig = {
  Cities: { screen: Cities },
  City: { screen: City }
}

const NavConfig = {
  navigationOptions: {
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#9C27B0' }
  } 
}

export default StackNavigator(RouteConfig, NavConfig)