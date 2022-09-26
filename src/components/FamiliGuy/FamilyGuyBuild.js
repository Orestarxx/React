import React from 'react';

const FamilyGuyBuild = ({grifin}) => {
    const {nameFiLa,gender,image} = grifin;
    return (
        <div>
            <div>{nameFiLa}</div>
            <div>{gender}</div>
            <img src={image} alt=""/>
        </div>
    );
};

export {FamilyGuyBuild} ;