const express= require ('express');
const router = express.Router();

const productsCartController = require('../controllers/productsCartController')

router.get('/', productsCartController.list);
router.put('/') //cuando el usuario edita cantidades de un producto
router.delete('/') //cuando el usuario borra un producto


module.exports= router