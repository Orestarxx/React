import React from 'react';
import {Link, Route, Routes} from "react-router-dom";

import css from './styleRoute.module.css'
import {Simpsons,FamilyGuy,Todods,Posts,Albums,Comments} from '../index'

const Routepage = () => {
    return (
        <div>
            <div className={css.holderKeyBoard}>
            <div className={css.keyBoard}>
                <div><Link to={'/simpsons'}>Simpsons</Link></div>
                <div ><Link to={'/familyGuy'}>Family Guy</Link></div>
                <div ><Link to={'/todos'}> Todos</Link></div>
                <div ><Link to={'/posts'}>Posts</Link></div>
                <div ><Link to={'/albums'}>Albums</Link></div>
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