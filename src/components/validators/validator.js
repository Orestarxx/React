import Joi from "joi";

const carValidator = Joi.object({
    model:Joi.string().regex(/^[a-zA-Zа-яА-ЯІіЇїґҐЄє]{1,30}$/).required().messages({'string.pattern.base':'max 30 characters.'}),
    price:Joi.number().min(1).max(1000000).required().messages({'string.pattern.base':'price must be higher then 0'}),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
})
export {carValidator}