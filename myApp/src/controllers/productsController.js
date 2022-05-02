const path = require("path");
const fs = require("fs");

//datos
const productsFilePath = path.join(__dirname, "../data/productsData.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const db = require("../database/models/index")

const productsController = {
  //Muestra todos los productos
  index: (req, res) => {
    res.render("index", { products: products });
  },

  //Muestra el detalle de un producto
  detail: (req, res) => {
    let idABuscar = req.params.id;

    products.forEach((element) => {
      if (idABuscar == element.id) {
        res.render("productDetails", { element: element });
      }
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
    // if (!Number(idABuscar)) {
    // 	return
    // }

    products.forEach((element) => {
      if (idABuscar == element.id) {
        res.render("productEdit", { element: element });
      }
    });
  },

  //Actualiza la informacion del producto a traves de PUT
  update: (req, res) => {
    let idABuscar = Number(req.params.id);
    let productToEdit = req.body;

    products.forEach((element) => {
      if (element.id == idABuscar) {
        element = productToEdit;
      }
    });
    let productsJSON = JSON.stringify(products);
    fs.writeFileSync(productsFilePath, productsJSON, "utf-8");
    res.redirect("/products");
  },

  //Elimina el producto seleccionado por id
  delete: (req, res) => {
    let idABuscar = Number(req.params.id);
    let newProducts = products.filter((element) => {
      return element.id != idABuscar;
    });

    let newProductsJSON = JSON.stringify(newProducts);
    fs.writeFileSync(productsFilePath, newProductsJSON, "utf-8");
    res.redirect("/products");
  },
};

module.exports = productsController;
