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

    db.findByPk(idABuscar)
      .then( (producto) => {
        return res.render("productDetails", { element: producto });
      });     
  },

  //Muestra form de creacion
  create: (req, res) => {
    res.render("productCreate");
  },

  //Guarda la informacion por POST
  store: (req, res) => {
    let body = req.body;
    let filename = req.file.filename
    
    db.Product.create({

      type: body.product_category,
      name: body.product_name,
      description: body.product_description,
      weight: body.product_weight,
      color: body.product_color,
      size: body.product_size,
      price: body.product_price,
      discount: body.product_discount,
      picture: filename

    })  .then( () => res.redirect("/products") );
           

  },

  //Muestra form de edición para el producto seleccionado por id
  edit: (req, res) => {
    let idABuscar = req.params.id;

    db.findByPk(idABuscar)
      .then( (producto) => {
        return res.render("productEdit", { element: producto });
      });    
  },

  //Actualiza la informacion del producto a traves de PUT
  update: (req, res) => {

    db.Product.update({

      type: body.product_category,
      name: body.product_name,
      description: body.product_description,
      weight: body.product_weight,
      color: body.product_color,
      size: body.product_size,
      price: body.product_price,
      discount: body.product_discount,
      picture: filename,
    }, {

      where: { id: req.params.id }

    }).then( () => res.redirect("/products") );   
  },

  //Elimina el producto seleccionado por id
  delete: (req, res) => {
    db.Product.destroy({where: { id: req.params.id }})
      .then( ()=> res.redirect("/products"))
  },
};

module.exports = productsController;
