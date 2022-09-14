import {familyGuy} from "../data/data";
import Guys from "./familyGuyBuild";


export default function   FamilyGuys(){
    return(<div className='familyDiv'>
        {familyGuy.map((guy) =>(<Guys item={guy} key={guy.id}/>))}
    </div>)
}