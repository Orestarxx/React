import React, {useEffect, useState} from 'react';
//-------
import User from "./UsersBuild";
import {getUsers} from "../axious.fetch.service/axious.fetch";


function Users() {
    let [users, setUsers] = useState([])
    let [details, setDetails] = useState([])


    const show = (obj) => {
        setDetails(obj)


    }


    useEffect(() => {
        getUsers().then(value => setUsers(value.data))

    }, [])

    return (<div id='userWrap'>
            <div id='wrap'>
                <div><b>City:</b>{details?.address?.city} </div>
                <div><b>Street:</b>{details?.address?.street}</div>

            </div>

            <div> {users.map((user, index) => (<User user={user} key={index} show={show}/>))}</div>


        </div>
    );
}

export default Users;