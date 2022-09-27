import {axiosService} from "./axious.service";
import {urls} from "../configs/urls";

const commentsService = {
    getAll:() => axiosService.get(`${urls.comments}`)
}
export {commentsService};
