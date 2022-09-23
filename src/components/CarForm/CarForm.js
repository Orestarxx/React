import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi'
//-------
import css from './carForm.module.css'
import {carValidator} from "../validators/validator";
import {carService} from "../services/car.service";
import {object} from "joi";

const CarForm = ({setCars,carUp,setCarUp}) => {
    const {register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm({
        mode:'all',
        resolver:joiResolver(carValidator)
    });
    const submit = async (car) =>{
        if(carUp){
         const{data} = await  carService.updateById(carUp.id,car)
            setCars((cars) => {
              const find = cars.find( value =>value.id === carUp.id)
                Object.assign(find,data)
                setCarUp(null)
                return [...cars]
            })
        }else{
      const {data} = await carService.create(car)
        console.log(data);
      setCars(cars =>[...cars,data])

        }
      reset()
    }
    useEffect(() =>{
     if(carUp){
         setValue('model',carUp.model,{shouldValidate:true})
         setValue('price',carUp.price,{shouldValidate:true})
         setValue('year',carUp.year,{shouldValidate:true})
     }
    },[carUp,setValue])
    return (
        <form onSubmit={handleSubmit(submit)} className={css.inputsForm}>
            <input type="text"  placeholder={'model'}{...register('model')} className={css.inputs}/>
            {errors.model && <div>{errors.model.message}</div>}
            <input type="number" placeholder={'price'}{...register('price',{valueAsNumber:true})} className={css.inputs} />
            {errors.price && <div>{errors.price.message}</div>}
            <input type="number" placeholder={'year'}{...register('year',{valueAsNumber:true})} className={css.inputs}/>
            {errors.year && <div>{errors.year.message}</div>}
            <button disabled={!isValid} className={css.saveButton}>{carUp?'Update':'Save'}</button>
        </form>
    );
};

export {CarForm};