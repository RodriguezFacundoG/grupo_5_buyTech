const path = require("path");
const db = require("../../database/models/index")

const productsApiController = {
  
  //Muestra todos los productos segun categoria
  types: (req, res) => {
    
    let categoryId = req.params.type;
    db.Product_category.findOne({where: {type: categoryId}})
      .then( category => {
        db.Product.findAll({where: {product_category_id: category.id}})
          .then ( products => {
            res.render('productTypeList', { products })
          })
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

  // Muestra formulario de creacion de productos
  create: (req, res) => {
    db.Product_category.findAll()
      .then((categories) => {
        return res.render("productCreate", {categories});
      })
  },

  //Guarda la informacion por POST
  store: (req, res) => {
    let body = req.body;
    let fileName = req.file.filename
    
    db.Product.create({

      name: body.product_name,
      description: body.product_description,
      stock: body.product_stock,
      weight: body.product_weight,
      color: body.product_color,
      size: body.product_size,
      price: body.product_price,
      discount: body.product_discount,
      picture: fileName,
      product_category_id: body.product_category,      
      
    })  .then( () => res.redirect("/") );         // Redirecciona a la pagina principal, porque antes redireccionaba a /products y eso no tiene pagina.

  },

  //Muestra form de edición para el producto seleccionado por id
  edit: (req, res) => {
    let idABuscar = req.params.id;
    const promise1 = db.Product_category.findAll();
    const promise2 = db.Product.findByPk(idABuscar, {include: ["product_category"] })
    Promise.all([promise1, promise2]) 
      .then( ([categories, product]) => {       
        return res.render("productEdit", {element: product, categories: categories})         
      })              
  },

  //Actualiza la informacion del producto a traves de PUT
  update: (req, res) => {
    let idABuscar = req.params.id;
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

      where: { id: idABuscar }

    }).then( () => res.redirect("/") );        // Redirecciona a la pagina principal, porque antes redireccionaba a /products y eso no tiene pagina.   
  },

  //Elimina el producto seleccionado por id
  delete: (req, res) => {
    let idABuscar = req.params.id;
    db.Product.destroy({where: { id: idABuscar }})
      .then( () => {
        db.Item.destroy({where: {product_id: idABuscar}})
          .then( () => res.redirect("/"))      // Redirecciona a la pagina principal, porque antes redireccionaba a /products y eso no tiene pagina.

      })
  },
};

module.exports = productsApiController;
