import React from 'react';
import {Link} from "react-router-dom";

const PostsBuild = ({comment}) => {
    const {postId,id,name,email,body} = comment
    return (
        <div>
            <div>{postId}</div>
            {/*<div>{id}</div>*/}
            {/*<div>{name}</div>*/}
            {/*<div>{email}</div>*/}
            <Link to={'/posts/'+postId} state={{...comment}}>{body}</Link>
        </div>
    );
};

export {PostsBuild};