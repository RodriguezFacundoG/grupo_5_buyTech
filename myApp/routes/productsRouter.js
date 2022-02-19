const express= require ('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js')


router.get('/:type',productsController.typeList);
router.get('/:type/:id',productsController.details);

router.get('/create',productsController.create);

router.get('/edit',productsController.edit);

router.get('/cart',productsController.cart);



module.exports= router;