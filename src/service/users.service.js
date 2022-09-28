import {userAxiosService} from "./axios.service";
import {urls} from "../urls/urls";

const userService = {
    getAll:() => userAxiosService.get(urls.users),
    create:(user) => userAxiosService.post(urls.users,user),
    getById:(id) => userAxiosService.get(`${urls.users}/${id}`),
    updateById:(id) => userAxiosService.put(`${urls.users}/${id}`),
    deleteById:(id) => userAxiosService.delete(`${urls.users}/${id}`)
}
export {userService}