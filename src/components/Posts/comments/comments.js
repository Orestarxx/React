import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {commentsService} from "../../../service/comments.service";
import {CommentsBuild} from "./commentsBuild";

const Comments = () => {
    const [comments,setComments] = useState([])
   const location = useLocation();


    // console.log(location.state);
    const {userId} = location.state;

 useEffect(() =>{
 commentsService.getAll(userId).then(({data}) =>setComments(data))

 },[userId])
    return (
        <div>
        {/*<div>{comments.map(comment =><CommentsBuild comment={comment} key={comment.id}/>)}</div>*/}
        {/*    <div>ID:{comments.id}</div>*/}
        {/*    <div>Email:{comments.email}</div>*/}
        {/*    {JSON.stringify(comments)}*/}
            <div>PostId:{comments.postId}</div>
            <div>ID:{comments.id}</div>
            <div>{comments.name}</div>
            <div>{comments.email}</div>
            <div>{comments.body}</div>
        </div>
    );
};

export {Comments};