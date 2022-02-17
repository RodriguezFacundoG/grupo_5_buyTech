const express= require ('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js')


router.get('/',productsController.typeList);
router.get('/:id',productsController.details);

router.get('/productCreate',productsController.create);
router.post('/', productsController.store);

router.get('/productEdit',productsController.edit);
router.put('/',productsController.upgrade);

router.delete('/',productsController.delete);



module.exports= router