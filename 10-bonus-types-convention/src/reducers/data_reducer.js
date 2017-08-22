import {
    GET_MOVIES,
    GET_GAMES,
    GET_CELEBRITIES
} from '../actions/types.js'

export default function(state={}, action){
    switch(action.type){
        case GET_MOVIES:
            return {...state,movies:action.payload};
        case GET_GAMES:
            return {...state,games:action.payload};
        case GET_CELEBRITIES:
            return {...state,celebrities:action.payload};
        default:
            return state;
    }
}

