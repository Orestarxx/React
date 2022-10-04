import React, {useReducer} from 'react';

import {actions} from "./actions";

const reducer = (state,{type,payload}) =>{
    switch (type){
        case actions.ADDCAT:
            return{...state, cats:[...state.cats,{name:payload,id:Date.now()}]}
        case actions.DELETECAT:
            return {...state, cats:state.cats.filter(cat => cat.id !== payload)}
        case actions.ADDDOG:
            return{...state, dogs:[...state.dogs,{name:payload,id:Date.now()}]}
        case actions.DELETEDOG:
            return {...state, dogs:state.dogs.filter(dog => dog.id !== payload)}
        default:
            console.log('')
            return state;
    }

}
const useAnimalReducer = () => useReducer(reducer,{cats:[],dogs:[]})

export {useAnimalReducer};