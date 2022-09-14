import {useState} from "react";

import Char from "./buildFetch";


export default function Rickworld(){
let[characters,setCharacter] = useState([])
fetch('https://rickandmortyapi.com/api/character')
    .then(value => value.json())
    .then(value =>{
        setCharacter(value.results)

    })
    return(<div className='container'>
        {characters.map((character)=>(<Char item={character} key={character.id}/>))}
    </div>)
}