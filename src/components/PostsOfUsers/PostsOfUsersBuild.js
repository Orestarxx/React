 export default function PostUser(props){
   let{user,showPosts,} = props;

    return(<div id='usersHolder'>
<div>{user.id} - {user.name}
</div>
     <button className='usersButton' onClick={() =>{
      showPosts(user.id)
     }}>Posts</button>
    </div>)
 }