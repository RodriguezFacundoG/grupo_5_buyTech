const express = require('express');
const path = require ('path');
const fs = require ('fs');
 

//datos
const productData = require ('../data/productsData')


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
store: (req,res)=>{
},
edit: (req,res)=>{
},
upgrade: (req,res)=>{
},
delete: (req,res)=>{
},
}


module.exports= productsController