import axios from "axios";

let todos = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/todos'
})

const getTodos = () => {
    return todos()
}
export {getTodos};