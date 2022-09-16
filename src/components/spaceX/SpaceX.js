import {useEffect, useState} from "react";
import SpaceBuild from "./SpaceXBuild";
import {launcher} from "../axious.service/axiousS";

export default function SpaceX() {
    let [spaceX, setSpaceX] = useState([])
    let [details, setDetails] = useState(null)
    const lift = (det) => {
        setDetails(det)

    }

    useEffect(() => {

            launcher().then(value =>{

                    let result = value.filter(val => val.launch_year !== '2020')
                    setSpaceX(result);
            }

            )





            // })
    }, [])
    return (<div className='pocket'>
        <div id='e'></div>
        <div className='details'>{details}</div>
        {spaceX.map((space, index) => (<SpaceBuild item={space} key={space.index} lift={lift}/>))}
        <div id='up'><a href='#e'><b>Up</b></a></div>
        <div id='down'><a href="#anchor"><b>Down</b></a></div>
        <div id='anchor'></div>
    </div>)
}