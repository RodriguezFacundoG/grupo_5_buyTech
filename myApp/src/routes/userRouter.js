const express = require('express');
const router = express.Router();
const multerUploadUser = require('../middlewares/multerUser');
const userController = require('../controllers/userController.js');
const verificationRegister = require('../middlewares/verificationRegister');
const loginAuth = require('../middlewares/loginAuth')

router.get('/login', userController.login);
router.post('/login', loginAuth, userController.login);

router.get('/register', userController.registerForm);
//debido a que Multer agrega campos al req.body:
// el orden de Multer y Verification debe ser asi: 1ero Multer, 2do Verification.
router.post('/register', multerUploadUser.single('user_photo'), verificationRegister, userController.registerUpload);

router.get('/product', userController.productCart);

module.exports = router;


