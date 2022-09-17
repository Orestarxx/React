import {useEffect, useState} from "react";
import SpaceBuild from "./SpaceXBuild";
import {launcher} from "../axious.fetch.service/axious.fetch";

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
    return (<div>
        <div id='e'></div>
        <div className='details'>{details}</div>
        <div className='pocket'>
        {spaceX.map((space, index) => (<SpaceBuild item={space} key={space.index} lift={lift}/>))}
        </div>
        <div id='up'><a href='#e'><b>Up</b></a></div>
        <div id='down'><a href="#anchor"><b>Down</b></a></div>
        <div id='anchor'></div>
        <hr/>
    </div>)
}