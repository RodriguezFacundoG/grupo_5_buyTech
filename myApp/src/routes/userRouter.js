const express= require ('express');
const router = express.Router();

const userController = require('../controllers/userController.js')

router.get('/login', userController.login);
router.post('/login', userController.login);
router.get('/register', userController.register);
router.post('/register', userController.register);
router.get('/productcart', userController.productCart);

module.exports= router;