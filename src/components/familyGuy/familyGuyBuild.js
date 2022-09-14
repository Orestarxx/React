export default function Guys(props){
let {item:familyGuy} =props;
    return(<div className='family'>
        <div>ID:{familyGuy.id}</div>
        <div> Name:{familyGuy.nameFiLa}</div>
        <div>Gender:{familyGuy.gender}</div>
        <img src={familyGuy.image} alt="Family Guy"/>



    </div>)

}