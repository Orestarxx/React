import {useEffect, useState} from "react";
import {commentsService} from "../../services/users.posts.service";
import {Comment} from "../comment/Comment";
import {CommentsForm} from "../commentsForm/CommentsForm";

const  Comments = () =>{
let [comments,setComments] = useState([])
    useEffect(() =>{
        commentsService.getAll().then(({data}) =>setComments(data))

    },[])
    return(<div>
        <CommentsForm setComments={setComments}/>
        <div>{comments.map((comment,index) =><Comment comments={comment} key={index}/>)}</div>

    </div>)
}
export {Comments};