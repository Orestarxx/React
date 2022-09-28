import React from 'react';
import {grifins} from "../../data/data";
import {FamilyGuyBuild} from "./FamilyGuyBuild";
import css from './familyGuyStyle.module.css'

const FamilyGuy = () => {
    return (
        <div>
            <div className={css.holderFamily}>{grifins.map(grifin => <FamilyGuyBuild grifin={grifin}
                                                                                     key={grifin.id}/>)}</div>
        </div>
    );
};

export {FamilyGuy} ;