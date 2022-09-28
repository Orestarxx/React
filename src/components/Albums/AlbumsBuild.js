import React from 'react';

import css from './albumsStyle.module.css'

const AlbumsBuild = ({album}) => {
    const {userId, id, title} = album;
    return (
        <div className={css.albumsHolder}>
            <div><b>UserId:</b>{userId}</div>
            <div><b>Id:</b>{id}</div>
            <div><b>Title:</b>{title}</div>
        </div>
    );
};

export {AlbumsBuild} ;