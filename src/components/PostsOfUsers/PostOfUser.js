import {useEffect, useState} from "react";
import PostUser from "./PostsOfUsersBuild";
import {getPosts, gotUsers} from "../axious.fetch.service/axious.fetch";

function Posts(){
    let[postUser,setPostUser] = useState([])
    let[posts,setPosts] = useState([])

    const showPosts = (userId) => {
        getPosts(userId).then(value =>setPosts(value.data))


    }

useEffect(() =>{
    gotUsers().then(value =>setPostUser(value.data))

},[])


    return(<div>
        <hr/>
        <div id='posts'>{posts.map(post => {
            return (<div ><div id='post'><b>Post:</b>{post.body} <b>.</b></div></div> )
        })}</div>
        <div id='use'>{postUser.map((user) =>(<PostUser user={user} key={user.id} showPosts={showPosts}/>))}</div>

    </div>)
}
export default Posts;