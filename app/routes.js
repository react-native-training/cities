import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import { Text, AsyncStorage } from 'react-native';

import { Tabs, TabConfig } from '@config/tabs';

const TabNav = TabNavigator(Tabs, TabConfig);

class App extends React.Component {
  state = {
    loading: false,
  }
  componentDidMount() {
    AsyncStorage.getItem('USER')
      .then(data => {
        console.log('Data: ', JSON.parse(data));
        this.setState({ loading: false });
      })
      .catch(() => {
        console.log('error...')
        this.setState({ loading: false });
      })
  }
  render() {
    if (this.state.loading) {
      return <Text>Loading...</Text>
    }
    return (
      <TabNav
        navigation={
          addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.tabs,
          })
        }
      />
    )
  }
}

const user = {
  isLoggedIn: false,
};

const mapStateToProps = (state) => ({
  tabs: state.tabs,
  user,
});

export default connect(mapStateToProps)(App);
