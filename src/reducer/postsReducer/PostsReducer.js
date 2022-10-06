import React from 'react';
import {createStore} from "redux";
import {ADDPOSTS} from "../../actions";

const postsReducer =  createStore((state ={posts:[],post:null},{type,payload}) =>{
    console.log(state);
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