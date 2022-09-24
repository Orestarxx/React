import React, {useEffect, useState} from 'react';
import {getAxiousComments} from "../../axios.service/axious.service";
import {PostsBuild} from "../PostsBuild/PostsBuild";
import {Outlet} from "react-router-dom";

const Post = () => {
        let [comments,setComments] = useState([])
    useEffect(() =>{
        getAxiousComments().then(value => setComments(value.data))
    },[])
    return (
        <div>
            <Outlet/>
            <div>{comments.map((comment,index) =><PostsBuild comment={comment} key={index}/>)}</div>
        </div>
    );
};

export {Post};