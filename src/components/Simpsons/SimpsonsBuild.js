import React from 'react';
import css from './simpsonsStyle.module.css'

const SimpsonsBuild = ({simpson}) => {
    const {nameSur,description,image} = simpson;
    return (
        <div className={css.simpsonsHolder}>

            <div>{nameSur}</div>
            <div>{description}</div>
            <div className={css.pictureHolder}>
            <img src={image} alt="Simpsons"/>
            </div>

        </div>
    );
};

export {SimpsonsBuild} ;