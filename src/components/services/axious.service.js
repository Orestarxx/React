import axios from "axios";
import {baseURL} from "../configs/urls";

let axiousService = axios.create({baseURL})
 export{axiousService}

