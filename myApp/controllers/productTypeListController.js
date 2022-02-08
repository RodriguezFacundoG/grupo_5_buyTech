const data = require('../data/products.js');

var productTypeListController ={
    index : (req, res, next)=>{
        xproduct = req.params.id;
        res.render('./productTypeList', data[xproduct]);
    },    
}

module.exports = productTypeListController;