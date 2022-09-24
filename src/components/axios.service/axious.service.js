import axios from "axios";

let baseTodos = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/todos'
});
let baseAlbums = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/albums'
})
let baseComments = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})
const getAxiousComments = () =>{
    return baseComments('/comments')
}
const getAxiosPosts = (id) =>{
    return baseComments('/posts/'+id)
}

const getAxiosTodos = () => {
    return baseTodos()
}
const getAxiousAlbums = () =>{
    return baseAlbums()
}
export {getAxiosTodos, getAxiousAlbums,getAxiousComments,getAxiosPosts};