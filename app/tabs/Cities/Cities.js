import React from 'react';
import { AsyncStorage, Image, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements'
import { updateFromStorage } from '../../actions/citiesActions';

import { KEY } from '../../constants';

class CitiesTab extends React.Component {
  static navigationOptions = {
     headerTitle: <Image style={{ marginTop: -3, maxHeight: 32 }} resizeMode='contain' source={require('../../assets/citieslogo.png')} />
  }
  componentDidMount() {
    const { dispatchUpdateFromStorage } = this.props;
    AsyncStorage.getItem(KEY)
      .then(data => {
        console.log('data:', data)
        if (!data) return;
        const cities = JSON.parse(data);
        dispatchUpdateFromStorage(cities.cities)
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
