import React from 'react';

const AlbumsBuild = ({album}) => {
    const {userId,id,title} = album;
    return (
        <div>
            <div><b>UserId:</b>{userId}</div>
            <div><b>Id:</b>{id}</div>
            <div><b>Title:</b>{title}</div>
        </div>
    );
};

export {AlbumsBuild} ;