
import {BrowserRouter,Routes,Route,Link,Outlet} from 'react-router-dom'


import {Todo} from "./components/TodosHolder/Todo/Todo";
import {Album} from "./components/AlbumsHolder/Album/Album";
import {Post} from "./components/PostsHolder/post/Post";
import {PostDetailsBuild} from "./components/PostsHolder/PostsBuild/PostDetailsBuild";





function App() {

  return (<div>
        <div>
          <div><Link to={'/todos'}><b>Todos appearing</b></Link></div>
          <div><Link to={'/albums'}><b>Albums appearing</b></Link></div>
            <div><Link to={'/comments'}> Comments appearing</Link></div>
          <div></div>
        </div>
        <Routes>
          <Route path={'todos'} element={ <Todo/>}/>
            <Route path={'albums'} element={<Album/>}/>
            <Route path={'comments'} element={<Post/>}/>
            <Route path={'posts/:id'} element={<PostDetailsBuild/>}/>


        </Routes>


      </div>

  );
}

export default App;
