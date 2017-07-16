import React from 'react';
import { TextInput, Dimensions, Image, View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { addCity } from '../../actions/citiesActions';
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C27B0',
  },
  logo: {
    maxHeight: 36,
    maxWidth: width,
    marginTop: 100,
    alignItems: 'center'
  },
  textInput: {
    height: 55,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 8,
    padding: 9
  }
})

class CitiesTab extends React.Component {
  state = {
    input: {}
  }
  updateInput = (key, value) => {
    this.setState({
      input: {
        ...this.state.input,
        [key]: value,
      }
    })
  }
  submit = () => {
    if (!this.state.input['country'] || !this.state.input['name']) return
    const { dispatchAddCity } = this.props;
    dispatchAddCity(this.state.input)
    this.setState({ input: {} })
    this.nameRef.focus()
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode='contain'
          style={styles.logo}
          source={require('../../assets/citieslogo.png')}
        />
        <TextInput
          ref={name => this.nameRef = name}
          value={this.state.input['name']}
          onChangeText={(value) => this.updateInput('name', value)}
          style={styles.textInput}
          placeholder='City name'
          autoCorrect={false}
        />
        <TextInput
          value={this.state.input['country']}
          onChangeText={(value) => this.updateInput('country', value)}
          style={styles.textInput}
          placeholder='Country name'
          autoCorrect={false}
        />
        <Button
          buttonStyle={{ marginTop: 8 }}
          title='Submit'
          backgroundColor='#8e8e8e'
          onPress={this.submit}
        />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchAddCity: (city) => dispatch(addCity(city))
})

export default connect(null, mapDispatchToProps)(CitiesTab)
