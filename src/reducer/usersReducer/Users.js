import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../axios.service/axios.service";
import {userAction} from "../../actions";


const Users = () => {

   let usersState = useSelector( state => state.usersReducer);
    console.log(usersState);
    const dispatch = useDispatch()
    useEffect(() =>{
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(value => value.json())
        //     .then(value =>{
        //         dispatch({type:userAction.ADDUSER,payload:value})
        //     })
        getUsers.getAll().then(value =>console.log(value.data))

    },[])
    return (
        <div>

        </div>
    )
};

export {Users};