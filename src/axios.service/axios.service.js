import axios from "axios";
import {URL, urls} from "../configs/urls";

const usersAxiosService= axios.create({baseURL});

const getUsers = () =>{
    usersAxiosService(urls.users);
}
const getPosts = () =>{
    usersAxiosService(urls.posts);
}
const getComments = () =>{
    usersAxiosService(urls.comments);
}
export {getPosts,getComments,getUsers};


