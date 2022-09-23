import React from 'react';
import css from'./car.module.css'
import {carService} from "../services/car.service";


const Car = ({car,setCars,setCarUp}) => {
    const {id, model, price, year} = car;

    const deleteCar = async () =>{
        await carService.deleteById(id);
        setCars(cars =>{
         const index = cars.findIndex(value =>value.id === id)
            cars.splice(index,1)
            return [...cars]
        })
    }
    // const updateCar = async () =>{
    //
    // }
    return (<div>
            <div className={css.infoHolder}>
                <div>
                    <div><b>Id:</b>{id}</div>
                    <div><b>Model:</b>{model}</div>
                    <div><b>Price:</b>{price}</div>
                    <div><b>Year:</b>{year}</div>
                </div>
                <div className={css.buttonsUpdateDeleteHolder}>
                    <button onClick={() =>setCarUp(car)} className={css.buttonsUpdateDelete}>Update</button>
                    <button onClick={ () => deleteCar()} className={css.buttonsUpdateDelete}>Delete</button>
                </div>
            </div>

        </div>
    );
};

export {Car};