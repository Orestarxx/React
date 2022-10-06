import './App.css';

import {Route,Routes} from "react-router-dom";
import {MainLayOut} from "./layOuts/MainLayOut";
import {CommentsPage, PostsPage, UserPage, UsersPage} from "./pages";



function App() {

  return (
      <Routes>
          <Route path={'/'} element={<MainLayOut/>}>
              <Route path={'users'} element={<UsersPage/>}/>
              <Route path={'users/:id'} element={<UserPage/>}/>
              <Route path={'posts'} element={<PostsPage/>}/>
              <Route path={'comments'} element={<CommentsPage/>}/>


          </Route>

      </Routes>
  );
}

export default App;
