import React from 'react';

import css from './commentsStyle.module.css'

const CommentsBuild = ({comment}) => {
    const {postId, id, name, email, body} = comment;


    return (
        <div className={css.commentsHolder}>
            <div><b>postId:</b>{postId}</div>
            <div><b>id:</b>{id}</div>
            <div><b>name:</b>{name}</div>
            <div><b>email:</b>{email}</div>
            <div><b>body:</b>{body}</div>
        </div>
    );
};

export {CommentsBuild};