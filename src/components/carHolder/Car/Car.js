import {carsService} from "../../services/users.posts.cars.service";

const  Car = ({car,setCars, carUpdate}) =>{
const {id,model,price,year} = car
    const deleteCar = async () =>{
await carsService.deleteById(id);
setCars(cars =>{
   const index = cars.findIndex(value => value.id === id)
    cars.splice(index,1)
    return[...cars]
})
    }

    return(<div>
        <div>
        <div><b>ID:</b>{id}</div>
        <div><b>Model:</b>{model}</div>
        <div><b>Price:</b>{price}</div>
        <div><b>Year:</b>{year}</div>
        </div>
        <div>
            <button onClick={() =>carUpdate(id)}>Update</button>
            <button onClick={() =>deleteCar()}>Delete</button>
        </div>
    </div>)
}
export {Car};