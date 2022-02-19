const express = require('express');
const path = require ('path');
const fs = require ('fs');
 

//datos
const productData = require ('../data/productsData');

const userController= {

    login: (req,res)=>{
        res.render('login')
        },
    register: (req,res)=>{
        res.render('register')
    }
};

module.exports= userController;