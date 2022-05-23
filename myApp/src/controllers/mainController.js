const path = require('path');
const db = require("../database/models/index")

const mainController = {
    home: (req, res) => {
        res.render('index');
    }    
};


module.exports = mainController;