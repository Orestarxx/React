import React from 'react';
import {Headers} from "../componets/headers/Headers";
import {Outlet} from 'react-router-dom'

const MainLayOut = () => {
    return (
        <div>
        <Headers/>
            <Outlet/>
        </div>
    );
};

export {MainLayOut};