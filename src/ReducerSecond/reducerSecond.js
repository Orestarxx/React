import React, {useReducer} from 'react';

import {actions2} from "../Reducer/actions2";

const reducer = (state,{type,payload}) =>{
    switch (type){
        case actions2.ADDCAT:
            return{...state, cats:[...state.cats,{name:payload,id:Date.now()}]}
        case actions2.DELETECAT:
            return {...state, cats:state.cats.filter(cat => cat.id !== payload)}
        case actions2.ADDDOG:
            return{...state, dogs:[...state.dogs,{name:payload,id:Date.now()}]}
        case actions2.DELETEDOG:
            return {...state, dogs:state.dogs.filter(dog => dog.id !== payload)}
        default:
            console.log('')
            return state;
    }

}
const useAnimalReducer = () => useReducer(reducer,{cats:[],dogs:[]})

export {useAnimalReducer};