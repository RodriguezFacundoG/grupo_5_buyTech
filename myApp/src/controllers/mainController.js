const path = require('path');
const db = require("../database/models/index")

const mainController = {
    home: (req, res) => {
        res.render('index', { products: products });
    }    
};


module.exports = mainController;