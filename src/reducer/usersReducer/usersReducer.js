import React from 'react';
import {createStore} from "redux";

    const usersReducer =  createStore((state ={users:[]},action) =>{
        console.log(state, action);
        return state;
    })
export {usersReducer};