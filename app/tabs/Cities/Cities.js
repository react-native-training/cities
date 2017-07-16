import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements'

class CitiesTab extends React.Component {
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
              onPress={() => navigation.navigate('City')}
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

export default connect(mapStateToProps)(CitiesTab)
