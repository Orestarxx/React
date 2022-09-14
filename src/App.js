import './components/familyGuy/familyGuyStyle.css'
import './components/fetches/styleRick.css'
import './App.css';
import Simpsons from "./components/familySimpsons/familySimpsons";
import Rickworld from "./components/fetches/fetch";
import FamilyGuys from "./components/familyGuy/familyGuy";




function App() {

  return (<div>

          <Simpsons/>
          <Rickworld/>
          <FamilyGuys/>

      </div>

  );
}

export default App;
