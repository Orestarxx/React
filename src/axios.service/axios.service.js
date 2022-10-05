import axios from "axios";
import {baseURL, urls} from "../configs/urls";

const axiosService= axios.create({baseURL});


export {axiosService};


