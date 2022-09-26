import React from 'react';

const PostsBuild = ({post}) => {
    const {userId,id,body,title} = post;
    return (
        <div>
            <div><b>userId:</b>{userId}</div>
            <div><b>Id:</b>{id}</div>
            <div><b>Body:</b>{body}</div>
            <div><b>Title:</b>{title}</div>
        </div>
    );
};

export {PostsBuild} ;