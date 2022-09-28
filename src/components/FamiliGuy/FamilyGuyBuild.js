import React from 'react';
import css from './familyGuyStyle.module.css'


const FamilyGuyBuild = ({grifin}) => {
    const {nameFiLa, gender, image} = grifin;
    return (
        <div className={css.familyGuyHolder}>
            <div>{nameFiLa}</div>
            <div>{gender}</div>
            <div className={css.pictureHolder}>
                <img src={image} alt=""/>
            </div>

        </div>
    );
};

export {FamilyGuyBuild} ;