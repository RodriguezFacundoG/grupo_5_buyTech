const express = require('express');
const path = require ('path');
const fs = require ('fs');
 

//datos
const productData = require ('../data/productsData');


const productCartController= {
list: (req,res)=>{
    res.render('productCart');
},
add: (req,res)=>{

},
substract: (req,res)=>{

},

}


module.exports= productCartController;
