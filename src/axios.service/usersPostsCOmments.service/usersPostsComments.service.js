import {axiosService} from "../axios.service";
import {urls} from "../../configs/urls";


const usersService ={
    getAll:() =>axiosService(urls.users)
}
const postsService ={
    getAll:() =>axiosService(urls.posts)
}
const commentsService ={
    getAll:() =>axiosService(urls.comments)
}
export {usersService,commentsService,postsService}