const path = require ('path');
const fs = require ('fs');
const {validationResult} = require('express-validator');
 
//datos
const productsFilePath = path.join(__dirname, '../data/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const userController= {
    login: (req,res)=>{
        res.render('login')
    },
    register: (req,res)=>{
        return res.render('register');
    },
    register1: (req,res)=>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            return res. send('Registro exitoso');
            //return res.render('register')
        }else{
           return res.render('register', {errors: errors.mapped(), old: req.body})
        }
       
    },
    productCart: (req,res)=>{
        //hacer un IF para que si el usuario está registrado o no, vaya a un lado especifico
        //hacer IF con sesion de usuario o redirigir a Register
        res.render('productCart')
    }
};

module.exports= userController;