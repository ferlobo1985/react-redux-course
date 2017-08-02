export default function(state={}, action){
    switch(action.type){
        case 'SEARCH_CARS':
            return {...state,list:action.payload};
        case 'CAR_DETAIL':
            return {...state,detail:action.payload}
        case 'CLEAR_DETAIL':
            return {...state,detail:action.payload}
        default:
            return state;
    }
}