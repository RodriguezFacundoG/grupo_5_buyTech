var express = require('express');
var router = express.Router();
var productTypeListController = require('../controllers/productTypeListController.js');

/* GET home page. */
router.get('/', productTypeListController.index);

module.exports = router;