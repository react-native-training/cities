import { combineReducers } from 'redux'
import citiesReducer from './citiesReducer';
import tabReducer from './tabReducer';

const rootReducer = combineReducers({
    citiesReducer,
    nav: tabReducer,
});

export default rootReducer;
