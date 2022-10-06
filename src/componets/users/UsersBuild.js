import React from 'react';

const UsersBuild = ({user}) => {
    const {id,name,username} = user
    return (
        <div>
            <div><b>ID:</b>{id}</div>
            <div><b>NAME:</b>{name}</div>
            <div><b>USERNAME:</b>{username}</div>
        </div>
    );
};

export  {UsersBuild};