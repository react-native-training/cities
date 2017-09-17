/*
* @providesModule @config/tabs
*/

import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import {
  StackNavigator,
  TabNavigator,
  addNavigationHelpers,
} from 'react-navigation';

import CitiesTab from '../tabs/Cities/CitiesTab';
import AddCityTab from '../tabs/AddCity/AddCityTab';

const Tabs = {
  CitiesTab: {
    screen: CitiesTab,
    navigationOptions: {
      tabBarLabel: 'Cities',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/cityicon.png')}
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
          source={require('../assets/addicon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  }
}

const TabConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#9C27B0',
    inactiveTintColor: '#666',
    showIcon: true,
    indicatorStyle: {
      backgroundColor: '#666'
    },
    style: {
      backgroundColor: '#ffffff',
      borderTopWidth: 1,
      borderTopColor: '#ededed'
    },
  },
}

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28
  }
})

export {
  Tabs,
  TabConfig,
};
