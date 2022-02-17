const express = require('express');
const path = require ('path');
const fs = require ('fs');
const multer = require('multer');

//datos
const productData = require ('../data/productsData')


controller= {
    index:(req,res)=>{
        res.render('index')
    }
}


module.exports= controller