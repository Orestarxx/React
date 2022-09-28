import React from 'react';

import  css from './todosStyle.module.css'

const TododsBuild = ({todo}) => {
    const {userId, id, title} = todo;
    return (
        <div className={css.todosHolder}>
            <div><b>UserId:</b>{userId}</div>
            <div><b>Id:</b>{id}</div>
            <div><b>Title:</b>{title}</div>
        </div>
    );
};

export {TododsBuild} ;