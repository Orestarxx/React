import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi"
import { carsValidator } from "../../user.comments.cars.validator/validators";
import { carsService } from "../../services/users.posts.cars.service";
import { useEffect, useState } from "react";

const CarForm = ({ setCars, carForUpdate, setCarsForUpdate }) => {
  const { register, handleSubmit, reset, setValue, } = useForm({ resolver: joiResolver(carsValidator) })
  const submit = async (car) => {
    const { data } = await carsService.create(car)
    setCars(car => [...car, data])
    reset()
  }
  const submitUpdate = async (car) => {

    await carsService.updateById(carForUpdate.id, car)

    setCars(cars => {
      const index = cars.findIndex(value => value.id === carForUpdate.id)
      cars[index].model = car.model;
      cars[index].price = car.price;
      cars[index].year = car.year;

      return cars;
    })

    setCarsForUpdate({});
     reset()
  }

  const [buttonName, setButtonName] = useState([]);

  useEffect(() => {
    console.log('useEffect ran.  ', carForUpdate);

    setForm()
  }, [carForUpdate]);

  const setForm = () => {

    setButtonName("Save");
    if (carForUpdate.id > 0) {
      setValue("model", carForUpdate.model);
      setValue("price", carForUpdate.price);
      setValue("year", carForUpdate.year);
      setButtonName("Update");
    }
  }

  return (

    <div>
      {carForUpdate.id ? (
        <form onSubmit={handleSubmit(submitUpdate)}>
          <input type="text" placeholder={'model'} {...register('model')}></input>
          <input type="text" placeholder={'price'} {...register('price', { valueAsNumber: true })}></input>
          <input type="text" placeholder={'year'} {...register('year', { valueAsNumber: true })}></input>
          <button>{buttonName}</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit(submit)}>
          <input type="text" placeholder={'model'} {...register('model')}></input>
          <input type="text" placeholder={'price'} {...register('price', { valueAsNumber: true })}></input>
          <input type="text" placeholder={'year'} {...register('year', { valueAsNumber: true })}></input>
          <button>{buttonName}</button>
        </form>
      )}
    </div>
  )
}
export { CarForm };