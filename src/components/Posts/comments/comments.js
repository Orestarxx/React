import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {commentsService} from "../../../service/comments.service";
import {CommentsBuild} from "./commentsBuild";

const Comments = (userId) => {
   const [comments,setComments] = useState([])

    const location = useLocation()
    const {state} = location;
    console.log(state);






 useEffect(() =>{
 commentsService.getAll(userId).then(({data}) =>setComments(data))

 },[userId])
    return (
        <div>
             {/*<div>{comments.map(comment =><CommentsBuild comment={comment} key={comment.id}/>)}</div>*/}
        {/*    <div>ID:{comments.id}</div>*/}
        {/*    <div>Email:{comments.email}</div>*/}
        {/*    {JSON.stringify(comments)}*/}
        {/*    { comments && <CommentsBuild comments={comments}/>}*/}

        </div>
    );
};

export {Comments};