import Joi from "joi";

const userValidator = Joi.object({
    name:Joi.string().regex(/^[a-zA-ZА-Яа-яґҐЄєЇїІі ]{1,20}$/).required(),
    username:Joi.string().regex(/^[a-zA-ZА-Яа-яґҐЄєЇїІі.]{1,30}$/).required(),
    email: Joi.string().email({ tlds: { allow: false } })
})
export {userValidator};