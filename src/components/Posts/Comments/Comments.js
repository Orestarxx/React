import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {commentsService} from "../../../service/comments.servise";
import {CommentsBuild} from "./CommentsBuild";

const Comments = () => {
    let [comments,setComment] = useState([])
  const location = useLocation()
    const {post} = location;
    useEffect(() =>{
        commentsService.getBy().then(({data}) => setComment(data))
    },[])
    console.log(comments);
    return (
        <div>

          <div>{comments.map(comment =><CommentsBuild comment={comment} key={comment.id}/>)}</div>

        </div>
    );
};

export {Comments};