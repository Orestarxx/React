import {UsersForm} from "../UserForm/UserForm";
import {useEffect, useState} from "react";
import {usersService} from "../../services/users.posts.service";
import {User} from "../User/User";

const Users = () =>{
    let [users,setUsers] = useState([])
    useEffect(() =>{
  usersService.getAll().then(({data}) => setUsers(data))
    },[])


    return(<div>
        <UsersForm setUsers={setUsers} />
        <div></div>
        <div>{users.map(user =><User user={user} key={user.id}/>)}</div>

    </div>)
 }
 export {Users};