import React, {useEffect, useState} from 'react';
//------
import {CarForm} from "../CarForm/CarForm";
import {carService} from "../services/car.service";
import {Car} from "../Car/Car";
import css from './cars.module.css'

const Cars = () => {
    const [cars,setCars] = useState([])
    const  [carUp,setCarUp] =useState(null)


    useEffect(() =>{
     carService.getAll().then(({data}) => setCars(data))
    },[])
    return (
        <div>
            <CarForm setCars={setCars} setCarUp={setCarUp} carUp={carUp}/>
            <div className={css.holder}>{cars.map(car =><Car car={car} key={car.id} setCars={setCars} setCarUp={setCarUp}/>)}</div>


        </div>
    );
};

export default Cars;