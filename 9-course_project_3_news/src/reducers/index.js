import { combineReducers } from 'redux';
import articles from './articles_reducer';

const rootReducer = combineReducers({
    articles
});

export default rootReducer;