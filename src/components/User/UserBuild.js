import React from 'react';

import css from './user.userForm.module.css'

const UserBuild = ({user}) => {
    const {id, name, username, email} = user;
    return (
            <div className={css.userHolder}>
                <div className={css.users}>
                    <div><b>id:</b>{id}</div>
                    <div><b>name:</b>{name}</div>
                    <div><b>username:</b>{username}</div>
                    <div><b>email:</b>{email}</div>
                </div>
                <div className={css.buttonHolder}>
                    <button> Update</button>
                    <button>Delete</button>
                </div>

            </div>

    );
};

export {UserBuild};