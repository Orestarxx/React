import React from 'react';
import {grifins} from "../../data/data";
import {FamilyGuyBuild} from "./FamilyGuyBuild";

const FamilyGuy = () => {
    return (
        <div>
       <div>{grifins.map( grifin =><FamilyGuyBuild grifin={grifin} key={grifin.id}/>)}</div>
        </div>
    );
};

export {FamilyGuy} ;