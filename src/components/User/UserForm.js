import React from 'react';
import {useForm} from'react-hook-form'
import {joiResolver} from '@hookform/resolvers/joi'

import css from './userForm.module.css'
import {userValidator} from "../validators/user.form.validator";
import {userService} from "../../service/users.service";

const UserForm = ({setUsers}) => {
    const {register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm({
        resolver:joiResolver(userValidator)
    })
    const submit = async (user) =>{
       const{data}= await userService.create(user)
        console.log(data);
       setUsers(users =>[...users,data])
        reset()
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