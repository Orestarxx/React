import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {ADDCOMMENTS} from "../../actions";
import {commentsService} from "../../axios.service/usersPostsCOmments.service/usersPostsComments.service";
import {CommentsBuild} from "./commentsBuild";



const Comments = () => {

    let {comments} = useSelector( state => state.commentsReducer);
    // console.log(users);
    const dispatch = useDispatch()

    useEffect(() =>{

        commentsService.getAll().then(({data}) =>dispatch({type:ADDCOMMENTS,payload:data}))

    },[])
    return (
        <div>
            { comments.map(comment => <CommentsBuild key={comment.id} comment={comment}/>)}
        </div>
    )
};

export {Comments};