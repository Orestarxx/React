import React, {useEffect, useState} from 'react';

import {getAxiosTodos} from "../../axios.service/axious.service";
import {TodosBuild} from "../TodosBuild/TodosBuild";
import css from'./styleTodo.module.css'

const Todo = () => {
    const [todos,getTodos] = useState([])
useEffect(() =>{
    getAxiosTodos().then(value => getTodos(value.data))
},[])
    return (
        <div>
            <div className={css.todoHolder}>{todos.map(todo =><TodosBuild todo={todo} key={todo.id}/>)}</div>
        </div>
    );
};

export  {Todo};
