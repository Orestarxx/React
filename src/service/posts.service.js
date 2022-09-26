import {axiosService} from "./axious.service";
import {urls} from "../configs/urls";

const postsService ={
    getAll:() => axiosService(urls.posts)
}
export {postsService};
