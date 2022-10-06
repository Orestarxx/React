import React from 'react';
import {createStore} from "redux";
import {ADDUSER,GETUSER} from "../../actions";

    const usersReducer =  createStore((state ={users:[],user:null},action) =>{
        console.log(state);
        const {type,payload} = action;
        switch (type){
            case ADDUSER:{
                return {
                    ...state,users:payload
                }

            }
            case GETUSER:
               const user = state.users.find(user =>user.id === payload)
                return {...state,user};
            default:
        return state;
        }
    })
export {usersReducer};