import React from 'react';
import { AppState, AsyncStorage, Image, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements'
import { updateFromStorage } from '../../actions/citiesActions';

import { KEY } from '../../constants';
import PropTypes from 'prop-types';

class CitiesTab extends React.Component {
  static navigationOptions = {
     headerTitle: <Image style={{ marginTop: -3, height: 32, width: 120 }} resizeMode='contain' source={require('../../assets/citieslogo.png')} />
  }
  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  componentDidMount() {
    const { dispatchUpdateFromStorage } = this.props;
    AsyncStorage.getItem(KEY)
      .then(data => {
        console.log('data: ', JSON.parse(data));
        if (!data) return;
        const cities = JSON.parse(data);
        dispatchUpdateFromStorage(cities.citiesReducer)
      })
      .catch(err => {
        console.log('error in cities componentDidMount')
        console.log('err :', err)
      })
  }
  render() {
    const { navigation } = this.props;
    const cities = Object.values(this.props.cities)
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {
          cities.map((city, index) => (
            <ListItem
              key={index}
              containerStyle={{ borderBottomColor: '#e5e5e5' }}
              title={city.name}
              onPress={() => navigation.navigate('City', { city })}
            />
          ))
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  cities: state.citiesReducer.cities,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateFromStorage: (cities) => dispatch(updateFromStorage(cities))
})

export default connect(mapStateToProps, mapDispatchToProps)(CitiesTab)
