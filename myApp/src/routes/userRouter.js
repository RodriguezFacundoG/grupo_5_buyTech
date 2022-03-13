const express= require ('express');
const router = express.Router();

const uploadUser = require('../middlewares/multerUser')
const userController = require('../controllers/userController.js')

router.get('/login', userController.login);
router.post('/login', userController.login);

router.get('/register', userController.register);
router.post('/register', uploadUser.single('user_photo'), userController.register);

router.get('/product', userController.productCart);

module.exports= router;