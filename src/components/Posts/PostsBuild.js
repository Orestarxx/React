import React from 'react';
import {Link} from 'react-router-dom'

const PostsBuild = ({post}) => {
    const {userId,id,body,title} = post;
    return (
        <div>
            <div><b>userId:</b>{userId}</div>
            <div><b>Id:</b>{id}</div>
            <div><b>Body:</b>{body}</div>
            <div><b>Title:</b>{title}</div>
            <Link to={'/comments/'+ userId.toString()} state={{...post}}><b>Comments</b></Link>
        </div>
    );
};

export {PostsBuild} ;