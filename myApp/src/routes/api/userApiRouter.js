const express = require('express');
const router = express.Router();

const userApiController = require('../../controllers/api/userApiController.js');
const multerUploadUser = require('../../middlewares/multerUser');
const verificationRegister = require('../../middlewares/verificationRegister');
const validateLogin = require('../../middlewares/validateLogin')
const authMiddleware = require('../../middlewares/authMiddleware')
const guestMiddleware = require('../../middlewares/guestMiddleware')

router.get('/login', guestMiddleware, userApiController.loginForm);
router.post('/login', validateLogin, userApiController.loginProcess);

router.get('/register', guestMiddleware, userApiController.registerForm);
//debido a que Multer agrega campos al req.body:
// el orden de Multer y Verification debe ser asi: 1ero Multer, 2do Verification.
router.post('/register', multerUploadUser.single('avatar'), verificationRegister, userApiController.registerUpload);

router.get('/cart',authMiddleware , userApiController.getCart);

router.post('/:id', authMiddleware, userApiController.addToCart);


router.get('/logout', authMiddleware, userApiController.logout);

router.get('/profile/:userId', userApiController.profile);

router.get('/edit/:userId', userApiController.edit);
router.post('/edit/:userId', userApiController.update);

router.get('/list', userApiController.listUsers);

module.exports = router;


