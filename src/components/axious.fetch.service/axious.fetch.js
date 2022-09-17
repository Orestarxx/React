import axios from "axios";

const launcher = () => {

    return fetch('https://api.spacexdata.com/v3/launches/')
        .then(value => value.json())

}

let use = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users/'
})

const getUsers = () => {
    return use()
}

export {getUsers, launcher}

