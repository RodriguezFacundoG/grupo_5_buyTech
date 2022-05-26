const express= require ('express');
const router = express.Router();

const productsApiController = require('../../controllers/api/productsApiController')
const multerUploadProduct = require('../../middlewares/multerProducts');
const productCreateAndEditValidation = require('../../middlewares/productCreateAndEditValidation');

router.get('/categories/:type', productsApiController.types)

router.get('/create', productsApiController.create);
router.post('/', multerUploadProduct.single("product_image"),productCreateAndEditValidation, productsApiController.store);

router.get('/:id', productsApiController.detail);

router.get('/:id/edit', productsApiController.edit)
router.put('/:id', productCreateAndEditValidation, productsApiController.update)

router.delete('/:id', productsApiController.delete)


module.exports = router;
