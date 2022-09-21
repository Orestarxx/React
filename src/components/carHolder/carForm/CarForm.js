import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"
import {carsValidator} from "../../user.comments.cars.validator/validators";
import {carsService} from "../../services/users.posts.cars.service";

const CarForm = ({setCars}) =>{
 const {register,handleSubmit,reset,formState:{errors,isValid}} = useForm({resolver:joiResolver(carsValidator)})
   const submit = async (car) =>{
     const {data} = await carsService.create(car)
       setCars( car =>[...car,data])
       reset()
   }


    return(<form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder={'model'} {...register('model' )}></input>
        <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true})}></input>
        <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}></input>
        <button>Save</button>
    </form>)
}
export {CarForm};