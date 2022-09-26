import './App.css'
import { Route, Link,Routes} from 'react-router-dom'
import {Albums, FamilyGuy, Posts, Simpsons, Todods} from "./components";
import {Routepage} from "./components/routePage/routepage";




function App() {

    return (<div>
           {/* <div>*/}
           {/* <div><Link to={'/simpsons'}>Simpsons</Link></div>*/}
           {/* <div><Link to={'/familyGuy'}>Family Guy</Link></div>*/}
           {/* <div><Link to={'/todos'}> Todos</Link></div>*/}
           {/* <div><Link to={'/posts'}>Posts</Link></div>*/}
           {/* <div><Link to={'/albums'}>Albums</Link></div>*/}
           {/* </div>*/}
           {/*<Routes>*/}
           {/*    <Route path={'simpsons'} element={<Simpsons/>}/>*/}
           {/*    <Route path={'familyGuy'} element={<FamilyGuy/>}/>*/}
           {/*    <Route path={'todos'} element={<Todods/>}/>*/}
           {/*    <Route path={'posts'} element={<Posts/>}/>*/}
           {/*    <Route path={'albums'} element={<Albums/>}/>*/}
           {/*</Routes>*/}
            <Routepage/>
        </div>

    );
}

export default App;
