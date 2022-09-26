import React from 'react';

const TododsBuild = ({todo}) => {
    const {userId,id,title} = todo;
    return (
        <div>
            <div><b>UserId:</b>{userId}</div>
            <div><b>Id:</b>{id}</div>
            <div><b>Title:</b>{title}</div>
        </div>
    );
};

export {TododsBuild} ;