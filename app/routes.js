import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import CitiesTab from './tabs/Cities/CitiesTab';
import AddCityTab from './tabs/AddCity/AddCityTab';

const TabConfig = {
  CitiesTab: {
    screen: CitiesTab,
    navigationOptions: {
      tabBarLabel: 'Cities',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./assets/cityicon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  AddCityTab: {
    screen: AddCityTab,
    navigationOptions: {
      tabBarLabel: 'Add City',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./assets/addicon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  }
}

const TabStyleConfig = {
  tabBarOptions: {
    activeTintColor: '#9C27B0',
  },
}

export default App = TabNavigator(TabConfig, TabStyleConfig);

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28
  }
})