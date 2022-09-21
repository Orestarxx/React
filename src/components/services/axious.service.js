import axios from "axios";
import {baseUrl} from "../configs/urls";

let axiousService = axios.create({baseURL:baseUrl})
 export{axiousService}

