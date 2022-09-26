import React, {useEffect, useState} from 'react';
import {todosService} from "../../service/todos.service";
import {TododsBuild} from "./TododsBuild";

const Todods = () => {
    const [todos,setTodos] = useState([])
    useEffect(() =>{
        todosService.getAll().then(({data}) =>setTodos(data))
    },[])
    return (
        <div>
            <div>{todos.map(todo =><TododsBuild todo={todo} key={todo.id}/>)}</div>
        </div>
    );
};

export {Todods} ;