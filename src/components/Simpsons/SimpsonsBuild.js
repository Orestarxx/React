import React from 'react';

const SimpsonsBuild = ({simpson}) => {
    const {nameSur,description,image} = simpson;
    return (
        <div>
            <div>{nameSur}</div>
            <div>{description}</div>
            <img src={image} alt="Simpsons"/>
        </div>
    );
};

export {SimpsonsBuild} ;