import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {combineReducers,createStore} from "redux";
import {usersReducer} from "./reducer/usersReducer/usersReducer";


// const store =  createStore((state ={users:[]},action) =>{
//     console.log(state, action);
//     return state;
// })

const reducer = combineReducers({
    usersReducer
});

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
