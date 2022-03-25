const {check} = require('express-validator');

const validateRegister = [
    check('user_full_name').notEmpty().withMessage('Debes ingresar tu nombre completo'),
    check('user_email').notEmpty().bail().isEmail().withMessage('Debes ingresar tu email'),
    check('user_password').notEmpty().withMessage('Debes ingresar tu contraseña').bail().isLength({min: 6}).withMessage('La contraseña debe tener al menos 8 caracteres'),
]

module.exports = validateRegister;