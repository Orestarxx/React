import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

const UsersReducer = () => {

   let usersState = useSelector( state => state);
    console.log(usersState);
    const UsersDispatch = useDispatch()
    useEffect(() =>{

    },[])
    return (
        <div>

        </div>
    );
};

export {UsersReducer};