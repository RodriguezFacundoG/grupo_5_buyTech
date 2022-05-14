const path = require("path");
const db = require("../database/models/index")

const productsController = {
  //Muestra todos los productos
  index: (req, res) => {    
    db.Product.findAll()
      .then( (products) => {
        return res.render("index", { products });
      })
  },

  //Muestra el detalle de un producto
  detail: (req, res) => {
    let idABuscar = req.params.id;
   
    db.Product.findByPk(idABuscar, {include: ["product_category"] })
      .then( (producto) => {        
          return res.render("productDetails", { element: producto });
      })     
  },

  //Muestra form de creacion
  create: (req, res) => {
    db.Product_category.findAll()
      .then((categories) => {
        return res.render("productCreate", {categories});
      })
  },

  //Guarda la informacion por POST
  store: (req, res) => {
    let body = req.body;
    let filename = req.file.filename
    
    db.Product.create({

      name: body.product_name,
      description: body.product_description,
      stock: body.product_stock,
      weight: body.product_weight,
      color: body.product_color,
      size: body.product_size,
      price: body.product_price,
      discount: body.product_discount,
      picture: filename,
      product_category_id: body.product_category,
      //Aca me queda por completas con el id del carrito
      
    })  .then( () => res.redirect("/products") );
           

  },

  //Muestra form de edición para el producto seleccionado por id
  edit: (req, res) => {
    let idABuscar = req.params.id;
    const promise1 = db.Product_category.findAll();
    const promise2 = db.Product.findByPk(idABuscar, {include: ["product_category"] })
    Promise.all([promise1, promise2]) 
      .then( ([categories, product]) => {       
        return res.render("productEdit", {element: product, categories: categories})
        // return res.send({categories, product}) 
      })
    // let categories = await db.Product_category.findAll();
    // let producto = await db.Product.findByPk(idABuscar, {include: ["product_category"] })  

    // return res.render("productEdit", {element: producto, categories: categories})
    // db.Product.findByPk(idABuscar, {include: ["product_category"] })
    //   .then( (producto) => {        
    //       // return res.send( producto );
    //       return res.render("productEdit", { element: producto });
    //   })       
  },

  //Actualiza la informacion del producto a traves de PUT
  update: (req, res) => {

    db.Product.update({

      name: body.product_name,
      description: body.product_description,
      stock: body.product_stock,
      weight: body.product_weight,
      color: body.product_color,
      size: body.product_size,
      price: body.product_price,
      discount: body.product_discount,
      picture: filename,
      product_category_id: body.product_category,
      
    }, {

      where: { id: req.params.id }

    }).then( () => res.redirect("/products") );   
  },

  //Elimina el producto seleccionado por id
  delete: (req, res) => {
    db.Product.destroy({where: { id: req.params.id }})
      .then( () => res.redirect("/products"))
  },
};

module.exports = productsController;
