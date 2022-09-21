import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentsValidator} from "../../user.comments.cars.validator/validators";
import {commentsService} from "../../services/users.posts.cars.service";

const CommentsForm = ({setComments}) =>{
const {register,handleSubmit,reset} = useForm({resolver:joiResolver(commentsValidator)})
    const submit = async (comment) =>{
    const {data} = await commentsService.create(comment)
        setComments(comment =>[...comment,data])
        reset()
        console.log(data)
    }
    return(<form onSubmit={handleSubmit(submit)}>
        <input type="number" placeholder={'postId'} {...register('postId')}/>
        <input type="text" placeholder={'name'} {...register('name')}/>
        <input type="text" placeholder={'email'} {...register('email')}/>
        <input type="text" placeholder={'body'} {...register('body')}/>
        <button>Post</button>
    </form>)
}
export {CommentsForm};