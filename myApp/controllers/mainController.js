const productsData = require ('../data/productsData');


const mainController= {
home: (req,res)=>{
    res.render('index', {productsData})
    },
};


module.exports= mainController;