import { combineReducers } from 'redux';
import cars from './cars_reducer';

const rootReducer = combineReducers({
    cars
});

export default rootReducer;