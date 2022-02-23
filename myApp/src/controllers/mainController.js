const productsData = require ('../data/products/productsData');


const mainController= {
home: (req,res)=>{
    res.render('index', {productsData})
    },
};


module.exports= mainController;