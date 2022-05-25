const express= require ('express');
const router = express.Router();

const productsController = require('../controllers/productsController')
const multerUploadProduct = require('../middlewares/multerProducts');
const productCreateAndEditValidation = require('../middlewares/productCreateAndEditValidation');

router.get('/categories/:type', productsController.types)

router.get('/create',productCreateAndEditValidation, productsController.create);
router.post('/', multerUploadProduct.single("product_image"), productsController.store);

router.get('/:id', productsController.detail);

router.get('/:id/edit',productCreateAndEditValidation, productsController.edit)
router.put('/:id', productsController.update)

router.delete('/:id', productsController.delete)


module.exports = router;
