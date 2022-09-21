import Joi from "joi";

const usersValidator = Joi.object({
    name:Joi.string().regex(/^[a-zA-Zа-яА-яА-Яа-яэЭїЇҐґЄєГг ]{1,20}$/).required(),
    username:Joi.string().regex(/^[a-zA-Zа-яА-яэЭїЇҐґЄє_.]{1,30}$/).required(),
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})
export {usersValidator}