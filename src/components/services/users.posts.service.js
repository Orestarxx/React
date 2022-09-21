import {axiousService} from "./axious.service";
import {urls} from "../configs/urls";


const usersService = {
    getAll:() => axiousService.get(urls.users),
    create:(user) => axiousService.post(urls.users,user),
    deleteById:(id) => axiousService.delete(`${urls.users}/${id}`)

}
const postsService = {
    getAll:() => axiousService.get(urls.posts),
    create:(post) => axiousService.post(urls.posts.post),
    deleteById:(id) => axiousService.delete(`${urls.posts}/${id}`)

}
export {usersService,postsService}