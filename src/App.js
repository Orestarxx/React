import './App.css';
import './components/spaceX/spaceXStayle.css'
import './components/usersWork/userStyle.css'
import './components/PostsOfUsers/PostsOfUserStyle.css'
import SpaceX from "./components/spaceX/SpaceX";
import Users from "./components/usersWork/Users";
import Posts from "./components/PostsOfUsers/PostOfUser";




function App() {

  return (<div className='main'>

          <SpaceX/>
          <Users/>
          <Posts/>
      </div>

  );
}

export default App;
