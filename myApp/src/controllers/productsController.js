const express = require('express');
const path = require ('path');
const fs = require ('fs');
 

//datos
const productData = require ('../data/products/productsData.json');


const productsController= {

typeList: (req,res)=>{
    res.render('productTypeList')
    },
details: (req,res)=>{
    res.render('productDetails')
},
create: (req,res)=>{
    res.render('productCreate')
},
edit: (req,res)=>{
    res.render('productEdit')
},
cart: (req,res)=>{
    res.render('productCart')
},

};


module.exports= productsController;