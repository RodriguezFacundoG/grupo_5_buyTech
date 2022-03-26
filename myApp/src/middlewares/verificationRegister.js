const {check} = require('express-validator');

const validateRegister = [
    check('user_full_name').notEmpty().withMessage('Debes ingresar tu nombre completo'),
    check('user_email').isEmail().withMessage('Debes ingresar un email válido'),
    check('user_password').notEmpty().withMessage('Debes ingresar tu contraseña').bail().isLength({min: 6}).withMessage('La contraseña debe tener al menos 8 caracteres'),
]

module.exports = validateRegister;