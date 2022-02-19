const express = require('express');
const path = require ('path');
const fs = require ('fs');
 

//datos
const productData = require ('../data/productsData');


const mainController= {

home: (req,res)=>{
    res.render('index')
    },
};


module.exports= mainController;