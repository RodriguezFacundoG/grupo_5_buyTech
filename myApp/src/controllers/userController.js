const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

//datos
const usersFilePath = path.join(__dirname, '../data/usersData.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));



const userController = {
    
    login: (req, res) => {  
        res.render('login');             
    },
    registerForm: (req, res) => {
        return res.render('register');
    },
    registerUpload: (req, res) => {    
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            let userPass = req.body.user_password;
            let userPassVerification = req.body.user_password_verification;
            if (userPass !== userPassVerification) {
                let passComparitionMsg = 'Las contraseñas no coinciden';
                return res.render('register', {errors: errors.mapped(), old: req.body, passComparitionMsg: passComparitionMsg});
            };  
            return res.render('register', { errors: errors.mapped(), old: req.body });

        } else {
            let userPass= req.body.user_password;
            let passEncripted = bcrypt.hashSync(req.body.user_password, 10);
            userPass = passEncripted;

            let newUser = req.body;
            newUser.id = users[users.length - 1].id + 1;
            users.push(newUser);
            let usersJSON = JSON.stringify(users);
            fs.writeFileSync(usersFilePath, usersJSON, 'utf-8');
            return res.redirect('/user/login');
        }

    },
    productCart: (req, res) => {
        //hacer un IF para que si el usuario está registrado o no, vaya a un lado especifico
        //hacer IF con sesion de usuario o redirigir a Register
        //hacer res.redirect a Login
        res.render('productCart')
    }
};

module.exports = userController;