import {axiousService} from "./axious.service";
import {urls} from "../configs/urls";


const usersService = {
    getAll:() => axiousService.get(urls.users),
    create:(user) => axiousService.post(urls.users,user),
    deleteById:(id) => axiousService.delete(`${urls.users}/${id}`)

}
const commentsService = {
    getAll:() => axiousService.get(urls.comments),
    create:(comment) => axiousService.post(urls.comments,comment),
    deleteById:(id) => axiousService.delete(`${urls.comments}/${id}`)

}
export {usersService,commentsService}