import {axiosService} from "./axious.service";
import {urls} from "../configs/urls";

const commentsService = {
    getByPostId:(postId) => axiosService.get( `${urls.posts}/${postId}${urls.comments}`)

}
export {commentsService};
