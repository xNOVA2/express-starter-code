import Joi from "joi";
import { validateRequest } from "./validate.js";
import {  rollNumberAndemailExistsValidator } from "./common.validators.js";
import { ROLES } from "../utils/constants.js";

// user register validator
const userRegisterValidator = Joi.object({
    fullName: Joi.string().trim().required(),
    email: Joi.string().trim().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().required(),
    role: Joi.string().valid(...Object.values(ROLES)).required(),
    class:Joi.string().required(),
    school: Joi.string().required(),
    rollNumber:Joi.number().required(),
    curoses:Joi.array().items(Joi.string())
});

// user login validator
const userLoginValidator = Joi.object({
    email: Joi.string().trim().email({ minDomainSegments: 2 }),
    password: Joi.string().required()
});

export const registerValidation = [validateRequest(userRegisterValidator), rollNumberAndemailExistsValidator];
export const loginValidation = validateRequest(userLoginValidator);