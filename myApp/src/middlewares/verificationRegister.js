const {body} = require('express-validator');

const validateRegister = [
    body('user_full_name').notEmpty().withMessage('Debes ingresar tu nombre completo'),
    body('user_mail').isEmail().withMessage('Debes ingresar un email válido'),
    body('user_password').notEmpty().withMessage('Debes ingresar tu contraseña').bail().isLength({min: 6}).withMessage('La contraseña debe tener al menos 8 caracteres'),
]

module.exports = validateRegister;