import {axiousService, carAxiousService} from "./axious.service";
import {urls} from "../configs/urls";


const usersService = {
    getAll:() => axiousService.get(urls.users),
    create:(user) => axiousService.post(urls.users,user),
    // deleteById:(id) => axiousService.delete(`${urls.users}/${id}`)

}
const commentsService = {
    getAll:() => axiousService.get(urls.comments),
    create:(comment) => axiousService.post(urls.comments,comment),
    // deleteById:(id) => axiousService.delete(`${urls.comments}/${id}`)

}
const carsService = {
    getAll:() =>carAxiousService.get(urls.cars),
    create:(car) =>carAxiousService.post(urls.cars,car),
    deleteById:(id) =>carAxiousService.delete(`${urls.cars}/${id}`),
    updateById:(id,car) =>carAxiousService.put(`${urls.cars}/${id}`,car),
    getById:(id) =>carAxiousService.get(`${urls.cars}/${id}`)
}
export {usersService,commentsService,carsService}