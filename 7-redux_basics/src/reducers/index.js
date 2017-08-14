import { combineReducers } from 'redux';
import movies from './movies_reducer'

const rootReducer = combineReducers({
       movies
});

export default rootReducer;