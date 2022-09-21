import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi'
import {usersValidator} from "../../user.comments.validator/validators";
import {usersService} from "../../services/users.posts.service";

const UsersForm = ({setUsers}) =>{
const {register,handleSubmit,reset,} = useForm({resolver:joiResolver(usersValidator)})
    const submit = async (user) =>{
    const {data} = await usersService.create(user)
       setUsers(users =>[...users,data])
        console.log(data)
        reset()


    }
    return(<form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder={'name'} {...register('name')}/>
        <input type="text" placeholder={'username'} {...register('username')}/>
        <input type="text" placeholder={'email'} {...register('email')}/>
        <button>Save</button>

    </form>)
}
export {UsersForm};