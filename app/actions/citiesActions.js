import { UPDATE_FROM_STORAGE, ADD_CITY, ADD_LOCATION_TO_CITY } from '../constants'

export function addCity(city) {
  return {
    type: ADD_CITY,
    city,
  }
}

export function addLocation(city, location) {
  return {
    type: ADD_LOCATION_TO_CITY,
    city,
    location
  }
}

export function updateFromStorage(cities) {
  return {
    type: UPDATE_FROM_STORAGE,
    cities
  }
}
