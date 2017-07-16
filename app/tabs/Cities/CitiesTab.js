import React from 'react';
import { View, Text, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Cities from './Cities';
import AddLocation from './AddLocation';
import City from './City';

const RouteConfig = {
  Cities: { screen: Cities },
  AddLocation: { screen: AddLocation },
  City: { screen: City }
}

const NavConfig = {
  navigationOptions: {
    headerStyle: { backgroundColor: '#9C27B0' },
    headerTitle: <Image style={{ marginTop: -3, maxHeight: 32 }} resizeMode='contain' source={require('../../assets/citieslogo.png')} />
  } 
}

export default StackNavigator(RouteConfig, NavConfig)