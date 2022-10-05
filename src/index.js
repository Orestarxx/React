import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {combineReducers,createStore} from "redux";
import {userAction} from "./actions";

import {usersReducer} from "./reducer/usersReducer/usersReducer";


// const usersReducer =  createStore((state ={users:[]},action) =>{
//     console.log(state, action);
//     switch (action.type){
//             case userAction.ADDUSER:{
//                 return {
//                     ...state,
//                     users:action.payload
//                 }
//
//             }
//             default:
//         return state;
//         }
    // return state;
// })

// const reducer = combineReducers({
//     usersReducer
// });
//
// let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={usersReducer}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
