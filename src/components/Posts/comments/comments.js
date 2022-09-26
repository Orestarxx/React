import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {commentsService} from "../../../service/comments.service";

const Comments = () => {
   const location = useLocation();
    console.log(location);
    const {state:commnets} = location;
 useEffect(() =>{
 commentsService.getAll(postId)
 },[])
    return (
        <div>

        </div>
    );
};

export {Comments};