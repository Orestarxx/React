import './App.css';
import './components/spaceX/spaceXStayle.css'
import './components/usersWork/userStyle.css'
import './components/postsOfUsers/PostsOfUserStyle.css'
import SpaceX from "./components/spaceX/SpaceX";
import Users from "./components/usersWork/Users";
import Posts from "./components/postsOfUsers/PostOfUser";




function App() {

  return (<div className='main'>

          <SpaceX/>
          <Users/>
          <Posts/>
      </div>

  );
}

export default App;
