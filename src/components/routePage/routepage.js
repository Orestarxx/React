import React from 'react';
import {Link, Route, Routes} from "react-router-dom";

import css from './styleRoute.module.css'
import {Simpsons} from "../Simpsons/Simpsons";
import {FamilyGuy} from "../FamiliGuy/FamilyGuy";
import {Todods} from "../Todods/Todods";
import {Posts} from "../Posts/Posts";
import {Albums} from "../Albums/Albums";
import {Comments} from "../Posts/Comments/Comments";


const Routepage = () => {
    return (
        <div>
            <div className={css.holderKeyBoard}>
            <div className={css.keyBoard}>
                <div><Link to={'/simpsons'}>Simpsons</Link></div>
                <div><Link to={'/familyGuy'}>Family Guy</Link></div>
                <div><Link to={'/todos'}> Todos</Link></div>
                <div><Link to={'/posts'}>Posts</Link></div>
                <div><Link to={'/albums'}>Albums</Link></div>
            </div>

            </div>
            <div>
                <Routes>
                    <Route path={'simpsons'} element={<Simpsons/>}/>
                    <Route path={'familyGuy'} element={<FamilyGuy/>}/>
                    <Route path={'todos'} element={<Todods/>}/>
                    <Route path={'posts'} element={<Posts/>}/>
                    <Route path={'comments/:id'} element={<Comments/>}/>
                    <Route path={'albums'} element={<Albums/>}/>
                </Routes>
            </div>


        </div>
    );
};

export {Routepage};