import axios from "axios";
import {baseURL} from "../urls/urls";

const userAxiosService = axios.create({baseURL})
export {userAxiosService}