const express = require('express');
const path = require ('path');
const fs = require ('fs');
 
//datos
const productData = require ('../data/productsData.json');


const productsController = {

    index: (req,res) => {
        res.render('productTypeList')
    },
    create: (req,res) => {
        res.render('productDetails')
    },
    store: (req,res) => {
        res.render('productCreate')
    },
    edit: (req,res) => {
        res.render('productEdit')
    },
    detail: (req,res) => {
        res.render('productCart')
    },
    update: (req,res) => {
        res.render('productCart')
    },
    delete: (req,res) => {
        res.render('productCart')
    }
};


module.exports= productsController;