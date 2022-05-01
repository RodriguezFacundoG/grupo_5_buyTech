const express= require ('express');
const router = express.Router();

const productsController = require('../controllers/productsController')
const multerUploadUser = require('../middlewares/multerProducts');

router.get('/', productsController.index)

router.get('/create', productsController.create);
router.post('/', multerUploadProduct.single("product_image"), productsController.store);

router.get('/:id', productsController.detail);

router.get('/:id/edit', productsController.edit)
router.put('/:id', productsController.update)

router.delete('/:id', productsController.delete)


module.exports = router;
