import Joi from "joi";

const usersValidator = Joi.object({
    name:Joi.string().regex(/^[a-zA-Zа-яА-яА-Яа-яэЭїЇҐґЄєГг ]{1,20}$/).required(),
    username:Joi.string().regex(/^[a-zA-Zа-яА-яэЭїЇҐґЄє_.]{1,30}$/).required(),
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

const commentsValidator =Joi.object({
    postId:Joi.number().min(1).max(100000000).required(),
    name:Joi.string().regex(/^[a-zA-Zа-яА-яА-Яа-яэЭїЇҐґЄєГг ]{1,20}$/).required(),
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    body:Joi.string().regex(/^[a-zA-Zа-яА-яА-Яа-яэЭїЇҐґЄєГг ]{1,1000}$/).required(),
})
export {usersValidator,commentsValidator}