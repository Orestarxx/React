const UsersPostsBuild =(props) =>{
 let{user,rightDetails} = props;


    return(<div id='users'>

        <div>{user.id} - {user.name}</div>
        <button className='usersButton' onClick={() =>{
            rightDetails(user)
        }}>Details</button>

    </div>)
}

export default UsersPostsBuild;
