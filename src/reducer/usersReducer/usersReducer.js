import React from 'react';
import {createStore} from "redux";
import {userAction} from "../../actions";

    const usersReducer =  createStore((state ={users:[]},action) =>{
        console.log(state,action);
        switch (action.payload){
            case userAction.ADDUSER:{
                return {
                    ...state,
                    users:action.payload
                }

            }
            default:
        return state;
        }
    })
export {usersReducer};