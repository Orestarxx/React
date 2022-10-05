import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userAction} from "../../actions";
import {usersService} from "../../axios.service/usersPostsCOmments.service/usersPostsComments.service";
import {usersReducer} from "./usersReducer";



const Users = () => {

   let usersState = useSelector( state => state);
    console.log(usersState);
    const dispatch = useDispatch()

    useEffect(() =>{

        usersService.getAll().then(value =>dispatch({type:userAction.ADDUSER,payload:value.data}))

    },[])
    return (
        <div>
            {}
        </div>
    )
};

export {Users};