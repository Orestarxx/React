import {axiosService} from "./axious.service";
import {urls} from "../configs/urls";

const commentsService = {
    getBypostId:(postId) => axiosService.get(urls.comments)
}
export {commentsService};
