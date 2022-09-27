import {axiosService} from "./axious.service";
import {urls} from "../configs/urls";

const commentsService = {
    getAll:(id) => axiosService.get(urls.comments+id)
}
export {commentsService};
