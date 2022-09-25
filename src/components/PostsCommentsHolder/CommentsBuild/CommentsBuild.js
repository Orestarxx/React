import React from 'react';
import {Link} from "react-router-dom";

const CommentsBuild = ({comment}) => {
    const {postId,id,name,email,body} = comment
    return (
        <div>
            <div><b>PostId:</b>{postId}</div>
            <div><b>Id:</b>{id}</div>
            <div><b>Name:</b>{name}</div>
            <div><b>Email:</b>{email}</div>
            <Link to={'/posts/'+postId} state={{...comment}}>{body}</Link>
        </div>
    );
};

export {CommentsBuild};