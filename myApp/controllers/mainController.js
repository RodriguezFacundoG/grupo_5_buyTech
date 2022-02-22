const productData = require ('../data/productsData');


const mainController= {
home: (req,res)=>{
    res.render('index', {productData})
    },
};


module.exports= mainController;