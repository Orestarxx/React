import React, {useEffect, useState} from 'react';
import {postsService} from "../../service/posts.service";
import {PostsBuild} from "./PostsBuild";
import css from './postsStyle.module.css'

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data))
    }, [])
    return (
        <div>

            <div className={css.holder}>{posts.map(post => <PostsBuild post={post} key={post.id}/>)}</div>
        </div>
    );
};

export {Posts} ;