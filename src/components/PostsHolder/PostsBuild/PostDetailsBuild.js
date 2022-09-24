import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {getAxiosPosts} from "../../axios.service/axious.service";

const PostDetailsBuild = () => {
   const location = useLocation()
    const [post,setPosts] = useState([])
    console.log(location);
   const {postId} = location.state;
   useEffect(() =>{
       getAxiosPosts(postId).then(value =>setPosts(value.data) )
   },[])
    return (
        <div>
            {/*<div>{posts.map(post =>post.body)}</div>*/}
            <div>{post.body}</div>
        </div>
    );
};

export {PostDetailsBuild};