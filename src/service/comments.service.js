import {axiosService} from "./axious.service";
import {baseURL, urls} from "../configs/urls";

const commentsService ={
    getAll:(postId) => axiosService.get(urls.comments +postId)
 }
 export {commentsService}