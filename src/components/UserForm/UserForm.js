import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi'
import {usersValidator} from "../user.posts.validator/validators";
import {usersService} from "../services/users.posts.service";

const UsersForm = ({setUsers}) =>{
const {setValue,register,handleSubmit,reset,formState:{errors,isValid}} = useForm({resolver:joiResolver(usersValidator)})
    const submit = async (user) =>{
    const {data} = await usersService.create(user)
       setUsers(users =>[...users,data])
        console.log(data)


    }
    return(<form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder={'name'} {...register('name')}/>
        <input type="text" placeholder={'username'} {...register('username')}/>
        <input type="text" placeholder={'email'} {...register('email')}/>
        <button>Save</button>

    </form>)
}
export {UsersForm};