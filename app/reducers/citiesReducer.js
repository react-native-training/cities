import { KEY, ADD_CITY, ADD_LOCATION_TO_CITY, UPDATE_FROM_STORAGE } from '../constants';
import { AsyncStorage } from 'react-native';

const initialState = {
  cities: {
    Austin: {
      name: 'Austin',
      country: 'USA',
      locations: []
    }
  },
}

export default function cityReducer(state = initialState, action) {
  console.log('action:', action)
  switch (action.type) {
    case ADD_CITY:
      const addCityState = {
        ...state,
        cities: {
          ...state.cities,
          [action.city.name]: {
            ...action.city,
            locations: [],
          }
        }
      }
      AsyncStorage.setItem(KEY, JSON.stringify(addCityState))
      return addCityState
    case ADD_LOCATION_TO_CITY:
      const addLocationState = {
        ...state,
        cities: {
          ...state.cities,
          [action.city]: {
            ...state.cities[action.city],
            locations: [
              ...state.cities[action.city]['locations'],
              action.location,
            ]
          }
        }
      };
      AsyncStorage.setItem(KEY, JSON.stringify(addLocationState))
      return addLocationState
    case UPDATE_FROM_STORAGE:
      return {
        cities: action.cities,
      }
    default:
      return state;
  }
}