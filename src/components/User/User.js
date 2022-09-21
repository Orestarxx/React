import css from './user.module.css'
const User = (props) =>{
    let{user}= props;


    return(<div className={css.user}>
        <div><b>ID:</b>{user.id} </div>
        <div><b> Name:</b>{user.name} </div>
        <div><b>Username:</b>{user.username} </div>
        <div><b>Email:</b>{user.email} </div>
    </div>)
}
export {User};