import axios from "axios";
import {baseURL, carBaseURL} from "../configs/urls";

let axiousService = axios.create({baseURL})
let carAxiousService = axios.create({baseURL:carBaseURL})
 export{axiousService,carAxiousService}

