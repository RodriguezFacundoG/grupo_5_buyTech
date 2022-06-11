const path = require('path');
const db = require("../database/models/index")

const mainController = {
    home: (req, res) => {
        db.Product.findAll({
            order: [
                ["discount","DESC"]
            ],
            limit:4
        })
        .then ( products => {
            res.render('index', {products:products})
          })
    }
};


module.exports = mainController;