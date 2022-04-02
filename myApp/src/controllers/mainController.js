const path = require('path');
const fs = require('fs');

//datos
const productsFilePath = path.join(__dirname, '../data/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    home: (req, res) => {
        res.render('index', { products: products });
    },
    types: (req, res) => {
        let categoryId = req.params.id;
        res.render('productTypeList', { products, categoryId })
    },
};


module.exports = mainController;