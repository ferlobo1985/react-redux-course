export default function(state={}, action){
    switch(action.type){
        case 'GET_MESSAGES':
            return {...state,list:action.payload};
        case 'ADD_MESSAGE':
            return {state,success:action.payload}
        default:
            return state;
    }
}

