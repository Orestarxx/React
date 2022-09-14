export default function Char(props){
let{item:character} = props;
    return(<div>

        <div className='buildChar'>
        <div>ID:{character.id} </div>
            <div> Name:{character.name}</div>
            <div>Status:{character.status}</div>
            <div>Species:{character.species}</div>
            <div>Gender:{character.gender}</div>
            <img src={character.image} alt="Rick and Morty"/>
        </div>
    </div>)
}