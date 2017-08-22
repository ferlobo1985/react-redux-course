import {
    GET_MOVIES,
    GET_GAMES,
    GET_CELEBRITIES
} from './types.js'


export function getMovies(){
    return{
        type: GET_MOVIES,
        payload:[
            {"id":1,"name":"Pulp Fiction"},
            {"id":2,"name":"Avatar"},
            {"id":3,"name":"Forrest Gump"},
            {"id":4,"name":"Fight Club"},
            {"id":5,"name":"Snatch"},
            {"id":6,"name":"Batman"},
            {"id":7,"name":"Superman"},
        ]
    }
}

export function getGames(){
    return{
        type: GET_GAMES,
        payload:[
            {"id":1,"name":"Mario"},
            {"id":2,"name":"Battlefield"},
            {"id":3,"name":"Last of us"},
            {"id":4,"name":"Splinter cell"},
            {"id":5,"name":"Fifa"},
            {"id":6,"name":"NBA2K"},
            {"id":7,"name":"Uncharted"},
        ]
    }
}


export function getCelebrities(){
    return{
        type: GET_CELEBRITIES,
        payload:[
            {"id":1,"name":"Matt Damon"},
            {"id":2,"name":"Homer simpson"},
            {"id":3,"name":"Nicola Tesla"},
            {"id":4,"name":"Kim Kardashian"},
            {"id":5,"name":"George Clooney"},
            {"id":6,"name":"Kate Winslet"},
            {"id":7,"name":"Opra"},
        ]
    }
}