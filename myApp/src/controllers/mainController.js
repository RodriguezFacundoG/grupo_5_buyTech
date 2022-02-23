productsData =  require ('../data/products/productsData.json');
//const productsData = JSON.parse(productsDataJSON);

const mainController= {
home: (req,res)=>{
    res.render('index', {productsData:productsData})
    },
};


module.exports= mainController;