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
    },
    productCart: (req,res)=>{
        //hacer un IF para que si el usuario está registrado o no, vaya a un lado especifico
        res.render('productCart')
    }
};

module.exports= userController;