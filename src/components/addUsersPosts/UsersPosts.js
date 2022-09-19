import {useEffect, useState} from "react";
import {getPosts, gotUsers} from "../axious.fetch.service/axious.fetch";
import UsersPostsBuild from "./UsersPostsBuild";
import ShowDetails from "./DetailsBuild";


function UsersPost() {
    let [users, setUsers] = useState([])
    let [userDetails, setUserDetails] = useState([])
    let [posts,setPosts] = useState([])

    function rightDetails(detalis) {
        setUserDetails(detalis)
    }
    function showPosts1(userID){
        getPosts(userID).then(value => setPosts(value.data))
    }

    useEffect(() => {
        gotUsers().then(value => setUsers(value.data))

    }, [])

    return (<div>
        <div id='changer'>
        <div className='left'>{users.map((user) => <UsersPostsBuild user={user} key={user.id} rightDetails={rightDetails}/>)}</div>
        <div className='right'><ShowDetails userDetails={userDetails} key={userDetails.id} showPosts1={showPosts1}/></div>
        </div>
        <div id='poster'>{posts.map((post)=>{return(<div id='posters'>
            <div><b>UserID:</b><span  className='postId'>{post?.userId}</span></div>
            <div><b>PostID:</b><span className='postId'>{post.id}</span></div>
            <div><b>Post:</b>{post.body} <b>.</b></div>
        </div>)})}</div>
    </div>)

}
export default UsersPost;