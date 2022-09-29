import React from 'react';

import css from './user.module.css'

const UserBuild = ({user}) => {
    const {id, name, username, email} = user;
    return (
            <div className={css.userHolder}>
                <div className={css.users}>
                    <div className={css.userInformation}><b>id:</b>{id}</div>
                    <div className={css.userInformation}><b>name:</b>{name}</div>
                    <div className={css.userInformation}><b>username:</b>{username}</div>
                    <div className={css.userInformation}><b>email:</b>{email}</div>
                </div>
                <div className={css.buttonHolder}>
                    <button className={css.userButton}> Update</button>
                    <button className={css.userButton}>Delete</button>
                </div>

            </div>

    );
};

export {UserBuild};