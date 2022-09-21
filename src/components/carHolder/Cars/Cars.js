import {CarForm} from "../carForm/CarForm";
import {useEffect, useState} from "react";
import {carsService} from "../../services/users.posts.cars.service";
import {Car} from "../Car/Car";

const Cars = () =>{
const [cars,setCars] = useState([]);

useEffect(() =>{
    carsService.getAll().then(({data}) =>setCars(data))
},[])


    return(<div>
        <CarForm setCars={setCars}/>
        <div></div>
        <div>{cars.map((car) =><Car key={car.id} car={car} setCars={setCars}/>)}</div>
    </div>)
}
export {Cars};