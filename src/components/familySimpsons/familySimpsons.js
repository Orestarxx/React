import {simpsons} from "../data/data";
import Simpson from "./simpsonsBuild";

export default function Simpsons(){

    return(<div className="holder">
        {simpsons.map(simpson =>( <Simpson item={simpson} key={simpson.id}/>))}
    </div>)
}