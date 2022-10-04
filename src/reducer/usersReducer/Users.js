import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

const Users = () => {

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

export {Users};