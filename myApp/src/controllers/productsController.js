const path = require ('path');
const fs = require ('fs');
 
//datos
const productsFilePath = path.join(__dirname, '../data/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController = {

    index: (req,res) => {
        res.render('productTypeList')
    },
    detail: (req,res) => {
        res.render('productDetails')
    },
    create: (req,res) => {
        res.render('productDetails')
    },
    store: (req,res) => {

        res.render('productCreate')
    },
    edit: (req,res) => {
        res.render('productEdit')
    },
    update: (req,res) => {
        res.render('productCart')
    },
    delete: (req,res) => {
        res.render('productCart')
    }
};


module.exports= productsController;