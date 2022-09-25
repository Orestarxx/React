import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {getAxiousComments} from "../../axios.service/axious.service";
import {CommentsBuild} from "../CommentsBuild/CommentsBuild";

const Comment = () => {
        let [comments,setComments] = useState([])
    useEffect(() =>{
        getAxiousComments().then(value => setComments(value.data))
    },[])
    return (
        <div>
            <Outlet/>
            <div>{comments.map((comment,index) =><CommentsBuild comment={comment} key={index}/>)}</div>
        </div>
    );
};

export {Comment};