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
    registerForm: (req,res)=>{
        return res.render('register');
    },
    registerUpload: (req,res)=>{
        /* let newUser = req.body;
        newUser.id = users[users.length - 1].id + 1;
        users.push(newUser);
        let usersJSON = JSON.stringify(users);
        fs.writeFileSync(usersFilePath, usersJSON, 'utf-8'); */        
        console.log(req.body);
        console.log(req.file);
        
        let errors = validationResult(req);
        
        if(!errors.isEmpty()){
            console.log(errors.mapped());
           return res.render('register', {errors: errors.mapped(), old: req.body});
        }else{
            return res.send('Registro exitoso');
        }
       
    },
    productCart: (req,res)=>{
        //hacer un IF para que si el usuario está registrado o no, vaya a un lado especifico
        //hacer IF con sesion de usuario o redirigir a Register
        //hacer res.redirect a Login
        res.render('productCart')
    }
};

module.exports= userController;