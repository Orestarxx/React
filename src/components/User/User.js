import React, {useEffect, useState} from 'react';

import {userService} from "../../service/users.service";
import {UserBuild} from "./UserBuild";
import css from './user.module.css'
import {UserForm} from "./UserForm";

const User = () => {
    const [users,setUsers] = useState([])
    useEffect(() =>{
    userService.getAll().then(({data}) =>setUsers(data))
    },[])
    return (
        <div className={css.mainHolder}>
            <UserForm setUsers={setUsers}/>
           <div className={css.holder}>{users.map(user =><UserBuild user={user} key={user.id}/>)}</div>
        </div>
    );
};

export {User};