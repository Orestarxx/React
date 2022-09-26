import React, {useEffect, useState} from 'react';
import {postsService} from "../../service/posts.service";
import {PostsBuild} from "./PostsBuild";

const Posts = () => {
 const [posts,setPosts] = useState([])
    useEffect(() =>{
        postsService.getAll().then(({data}) =>setPosts(data))
    },[])
    return (
        <div>
           <div>{posts.map(post =><PostsBuild post={post} key={post.id}/>)}</div>
        </div>
    );
};

export {Posts} ;