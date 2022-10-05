import React from 'react';
import {createStore} from "redux";
import {userAction} from "../../actions";

    const usersReducer =  createStore((state ={users:[]},action) =>{
        console.log(state,action);
        switch (action.type){
            case userAction.ADDUSER:{
                return {
                    ...state,
                    users:payload
                }
            }
        }
        return state;
    })
export {usersReducer};