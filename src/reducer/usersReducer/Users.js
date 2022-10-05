import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../axios.service/axios.service";
import {userAction} from "../../actions";


const Users = () => {

   let usersState = useSelector( state => state.usersReducer);
    console.log(usersState);
    const UsersDispatch = useDispatch()
    useEffect(() =>{
        getUsers().then(UsersDispatch({type:userAction.ADDUSER,payload:{}}))
    },[])
    return (
        <div>

        </div>
    );
};

export {Users};