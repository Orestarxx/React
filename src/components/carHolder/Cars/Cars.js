import { CarForm } from "../carForm/CarForm";
import { useEffect, useState } from "react";
import { carsService } from "../../services/users.posts.cars.service";
import { Car } from "../Car/Car";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [carForUpdate, setCarsForUpdate] = useState([]);

    useEffect(() => {
        carsService.getAll().then(({ data }) => setCars(data))
    }, [])

    const carUpdate = (id) => {
        
        const index = cars.findIndex(car => car.id === id);
        setCarsForUpdate(cars[index]);
    }

    return (<div>
        <CarForm setCars={setCars} carForUpdate={carForUpdate} setCarsForUpdate={setCarsForUpdate}/>
        <div></div>
        <div>{cars.map((car) => <Car key={car.id} car={car} setCars={setCars} carUpdate={carUpdate}/>)}</div>
    </div>)
}
export { Cars };