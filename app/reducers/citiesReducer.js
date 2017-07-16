import { ADD_CITY, ADD_ITEM_TO_CITY } from '../constants';

const initialState = {
  cities: {
    Austin: {
      name: 'Austin',
      state: 'Texas',
      country: 'USA',
      locations: []
    }
  },
}

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        cities: {
          ...state.cities,
          [action.state.city]: {}
        }
      };
    case ADD_ITEM_TO_CITY:
      return {
        ...state,
        cities: {
          ...state.cities,
          [action.city.name]: action.city.info,
        }
      };
    default:
      return state;
  }
}