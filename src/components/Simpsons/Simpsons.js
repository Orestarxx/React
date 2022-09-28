import React from 'react';

import {simpsons} from "../../data/data";
import {SimpsonsBuild} from "./SimpsonsBuild";
import css from './simpsonsStyle.module.css'

const Simpsons = () => {
    return (
        <div>
            <div className={css.holder}>{simpsons.map(simpson => <SimpsonsBuild simpson={simpson}
                                                                                key={simpson.id}/>)}</div>
        </div>
    );
};

export {Simpsons} ;