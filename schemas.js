const Joi = require('joi')

const schemas = {
    userPost : Joi.object().keys({
        name: Joi.string().required(),
        mo_no: Joi.number().integer().min(1000000000).max(9999999999).required().messages({
            "number.min": "Min 10 Digits allow",
            "number.max": "MAx 10 Digits allow"
        }),
        email: Joi.string().email().required(),
        // profile: Joi.string().required(),
        password: Joi.string().required()
    }),
    foodPost: Joi.object().keys({
        name: Joi.string().required(),
        calories: Joi.number().required(),
        userId: Joi.string().required()
    })
}

module.exports = schemas