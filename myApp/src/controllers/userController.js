const express = require('express');
const path = require ('path');
const fs = require ('fs');
 
//datos
const productsFilePath = path.join(__dirname, '../data/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const userController= {

    login: (req,res)=>{
        res.render('login')
        },
    register: (req,res)=>{
        res.render('register')
    }
};

module.exports= userController;