import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {ADDUSER} from "../../actions";
import {usersService} from "../../axios.service/usersPostsCOmments.service/usersPostsComments.service";
import {UsersBuild} from "./UsersBuild";


const Users = () => {

   let {users} = useSelector( state => state.usersReducer);
    console.log(users);
    const dispatch = useDispatch()

    useEffect(() =>{

        usersService.getAll().then(({data}) =>dispatch({type:ADDUSER,payload:data}))

    },[])
    return (
        <div>
            { users.map(user => <UsersBuild key={user.id} user={user}/>)}
        </div>
    )
};

export {Users};