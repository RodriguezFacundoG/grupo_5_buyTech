const express= require ('express');
const router = express.Router();
const path = require ('path');
const multerUploadUser = require('../middlewares/multerUser');
const userController = require('../controllers/userController.js');
const verificationLogin = require('../middlewares/verificationLogin');

router.get('/login', userController.login);
router.post('/login', userController.login);

router.get('/register', userController.register);
router.post('/register',verificationLogin, multerUploadUser.single('user_photo'), userController.register1);

router.get('/product', userController.productCart);

module.exports= router;


