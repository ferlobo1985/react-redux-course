import { combineReducers } from 'redux';
import messages from './messages_reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    messages,
    form:formReducer
});

export default rootReducer;