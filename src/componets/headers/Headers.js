import React from 'react';
import {Link} from "react-router-dom";

const Headers = () => {
    return (
        <div>
            <div><Link to={'/'}></Link>MainPage</div>
            <div><Link to={'users'}>UsersPage</Link></div>
            <div><Link to={'posts'}>PostsPage</Link></div>
            <div><Link to={'comments'}>CommentsPage</Link></div>
        </div>
    );
};

export  {Headers};