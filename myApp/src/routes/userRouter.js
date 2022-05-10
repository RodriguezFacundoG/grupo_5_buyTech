const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');
const multerUploadUser = require('../middlewares/multerUser');
const verificationRegister = require('../middlewares/verificationRegister');
const validateLogin = require('../middlewares/validateLogin')
const authMiddleware = require('../middlewares/authMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')

router.get('/login', guestMiddleware, userController.loginForm);
router.post('/login', validateLogin, userController.loginProcess);

router.get('/register', guestMiddleware, userController.registerForm);
//debido a que Multer agrega campos al req.body:
// el orden de Multer y Verification debe ser asi: 1ero Multer, 2do Verification.
router.post('/register', multerUploadUser.single('avatar'), verificationRegister, userController.registerUpload);

router.get('/cart', authMiddleware, userController.productCart);

router.get('/logout', authMiddleware, userController.logout);

// router.get('/list', userController.listUsers);

module.exports = router;


