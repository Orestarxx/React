// import {axiosService} from "./axious.service";
// import {baseURL, urls} from "../configs/urls";
//
// const commentsService ={
//     getAll:(id) => axiosService.get(`${urls.comments}/${id}`)
//  }
//  export {commentsService}

import axios from "axios";

let baseComments = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})
const getAxiousComments = () =>{
    return baseComments('/comments'+ id)
}