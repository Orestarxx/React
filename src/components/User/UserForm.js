import React from 'react';
import {useForm} from'react-hook-form'
import {joiResolver} from '@hookform/resolvers/joi'

import css from './userForm.module.css'
import {userValidator} from "../validators/user.form.validator";

const UserForm = () => {
    const {register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm({
        resolver:joiResolver(userValidator)
    })
    const submit = (user) =>{
        console.log(user);
    }
    return (<div>
        <div className={css.loginBox}>
            <h2>Create new user</h2>
            <form onSubmit={handleSubmit(submit)}>
                <div className={css.userBox}>
                    <input type="text" placeholder={'name'} {...register('name')} />
                        <label><b>NAME</b></label>
                </div>
                <div className={css.userBox}>
                    <input type="text" placeholder={'username'} {...register('username')}/>
                        <label><b>USERNAME</b></label>
                </div>
                <div className={css.userBox}>
                    <input type="text" placeholder={'email'} {...register('email')}/>
                    <label><b><b>EMAIL</b></b></label>
                </div>

                <button className={css.formButton}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </button>



            </form>
        </div>


    </div>
    );
};

export {UserForm};