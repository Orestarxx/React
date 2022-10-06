import React from 'react';
import {createStore} from "redux";
import {ADDPOSTS} from "../../actions";

const postsReducer =  createStore((state ={posts:[],post:null},action) =>{
    console.log(state);
    const {type,payload} =action;
    switch (type){
        case ADDPOSTS:{
            return {
                ...state,
                posts:payload
            }

        }
        default:
            return state;
    }
})
export {postsReducer};