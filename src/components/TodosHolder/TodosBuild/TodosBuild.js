import React from 'react';

const TodosBuild = ({todo}) => {
  const {userId,id,title,completed} = todo;
    return (
        <div>
            <div><b>UserId:</b> {userId}</div>
            <div><b>Id:</b>{id}</div>
            <div><b>title:</b> {title}</div>
            <div><b>completed:</b>{completed}</div>
        </div>
    );
};

export {TodosBuild};
