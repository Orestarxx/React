import React from 'react';
import {simpsons} from "../../data/data";
import {SimpsonsBuild} from "./SimpsonsBuild";

const Simpsons = () => {
    return (
        <div>
        <div>{simpsons.map(simpson =><SimpsonsBuild simpson={simpson} key={simpson.id}/>)}</div>
        </div>
    );
};

export {Simpsons} ;