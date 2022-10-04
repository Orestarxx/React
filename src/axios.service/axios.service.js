import axios from "axios";
import {URL, urls} from "../configs/urls";

const usersAxousService= axios.create({URL});

const getUsers = () =>{
    usersAxousService(urls.users);
}
const getPosts = () =>{
    usersAxousService(urls.posts);
}
const getComments = () =>{
    usersAxousService(urls.comments);
}
export {getPosts,getComments,getUsers};


