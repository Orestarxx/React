import {useState} from "react";
import SpaceBuild from "../spaceX/SpaceXBuild";

export default function SpaceX (){

    let [spaceX,setSpaceX] = useState([])
    fetch('https://api.spacexdata.com/v3/launches/')
        .then(value => value.json())
        .then(value => {
            let result = value.filter(val =>val.launch_year !== '2020')
            setSpaceX(result)




        })
    return(<div>
        {spaceX.map((space,index)=>(<SpaceBuild item={space} key={space.index}/>))}
    </div>)
}