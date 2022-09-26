import {axiosService} from "./axious.service";
import {baseURL, urls} from "../configs/urls";

const commentsService ={
    getAll:() => axiosService.get(urls.comments)
 }
 export {commentsService}