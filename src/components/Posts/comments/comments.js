import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {commentsService} from "../../../service/comments.service";
import {CommentsBuild} from "./commentsBuild";

const Comments = () => {
    const [comments,setComments] = useState([])
   const location = useLocation();
    console.log(location.state);
    const {userId} = location.state;
 useEffect(() =>{
 commentsService.getAll(userId).then(({data}) =>setComments(data))

 },[userId])
    return (
        <div>
        {/*<div>{comments.map(comment =><CommentsBuild comment={comment} key={comment.id}/>)}</div>*/}
            <div>ID:{comments.id}</div>
        </div>
    );
};

export {Comments};