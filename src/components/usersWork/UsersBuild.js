export default function User(props) {
    let {user, show} = props;

    return (<div id='holder'>
        <div>{user.id} - {user.name}</div>
        <button className='usersButton' onClick={() => {
            show(user)


        }
        }><b>Details</b>
        </button>
    </div>)

}