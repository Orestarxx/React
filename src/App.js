import './App.css';
import './components/spaceX/spaceXStayle.css';
import './components/usersWork/userStyle.css';
import './components/postsOfUsers/PostsOfUserStyle.css';
import './components/addUsersPosts/styleAdd.css'
import SpaceX from "./components/spaceX/SpaceX";
import Users from "./components/usersWork/Users";
import Posts from "./components/postsOfUsers/PostOfUser";
import UsersPost from "./components/addUsersPosts/UsersPosts";




function App() {

  return (<div className='main'>

          <SpaceX/>
          <Users/>
          <Posts/>
          <UsersPost/>
      </div>

  );
}

export default App;
