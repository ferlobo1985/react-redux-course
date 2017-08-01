export default function(state=[], action){
    switch(action.type){
        case 'SEARCH_CARS':
            return action.payload;
        default:
            return state;
    }
}