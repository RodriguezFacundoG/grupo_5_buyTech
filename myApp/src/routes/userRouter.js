const express = require('express');
const router = express.Router();
const multerUploadUser = require('../middlewares/multerUser');
const userController = require('../controllers/userController.js');
const verificationRegister = require('../middlewares/verificationRegister');
const authMiddleware = require('../middlewares/authMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')

router.get('/login', guestMiddleware, userController.loginForm);
router.post('/login', userController.loginProcess);

router.get('/register', guestMiddleware, userController.registerForm);
//debido a que Multer agrega campos al req.body:
// el orden de Multer y Verification debe ser asi: 1ero Multer, 2do Verification.
router.post('/register', multerUploadUser.single('user_photo'), verificationRegister, userController.registerUpload);

router.get('/cart', authMiddleware, userController.productCart);


module.exports = router;


