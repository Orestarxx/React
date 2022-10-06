import React from 'react';
import {createStore} from "redux";
import {ADDCOMMENTS} from "../../actions";


const commentsReducer =  createStore((state = {comments:[],comment:null},action) =>{
    console.log(state);
    const {type,payload} = action;
    switch (type){
        case ADDCOMMENTS:{
            return {
                ...state,
                comments:payload
            }

        }
        default:
            return state;
    }
})
export {commentsReducer};