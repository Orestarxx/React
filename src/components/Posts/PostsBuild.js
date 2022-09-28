import React from 'react';
import {Link} from 'react-router-dom'
import css from './postsStyle.module.css'

const PostsBuild = ({post}) => {
    const {userId, id, body, title} = post;
    return (
        <div className={css.postsHolder}>
            <div><b>userId:</b>{userId}</div>
            <div><b>Id:</b>{id}</div>
            <div><b>Body:</b>{body}</div>
            <div><b>Title:</b>{title}</div>
            <div className={css.commentsLink}>
                <Link to={'/comments/' + id} state={{...post}}> <b>Get comments</b></Link>
            </div>

        </div>
    );
};

export {PostsBuild} ;