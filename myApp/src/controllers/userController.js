const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const db = require("../database/models/index")
// Que es lo mismo que hacer require("../database/models") porque Javascript va a buscar siempre el archivo index

//datos
const usersFilePath = path.join(__dirname, '../data/usersData.json');
let usersJSON = fs.readFileSync(usersFilePath, 'utf-8');

let users;              //Si está vacío, que en la variable users, ponga un array vacío, para despues
if (usersJSON == '') {  //poder agregarle varios objetos (cada uno un usuario)
    users = [];
} else {
    users = JSON.parse(usersJSON);
}

const userController = {

    loginForm: (req, res) => {
        res.render('login');
    },
    loginProcess: (req, res) => {

        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('login', {errors: errors.mapped(), old: req.body})
        }

        for (let userToLogin of users) {
            if (req.body.email == userToLogin.email) {
                let samePassword = bcrypt.compareSync(req.body.password, userToLogin.password)
                console.log(samePassword)
                if (!samePassword) { //Cambiar a if(samePassword) al terminar de hacer pruebas
                    delete userToLogin.password;            //Borro el password antes de guardar el usuario en sesion para mayor seguridad
                    req.session.userLogged = userToLogin;   //creo la propiedad userLogged en el objeto global req.session
                    //Cookie
                    if (req.body.remember_me) {
                        res.cookie('recordarEmail', req.session.userLogged.email, { maxAge: 60000 });
                    }

                    return res.redirect('/');
                }

                return res.render("login", {
                    errors: {
                        email: {
                            msg: "Credenciales inválidas"
                        }
                    }
                });
            }
        }

        return res.render('login', {
            errors: {
                email: {
                    msg: "Este email no está registrado"
                }
            }
        });

    },
    registerForm: (req, res) => {
        return res.render('register');
    },
    registerUpload: async (req, res) => {
        let errors = validationResult(req);
        let userPass = req.body.password;
        let userPassVerification = req.body.password_verification;
        //Si tiene errores sintácticos o las contraseñas no coinciden:
        if (!errors.isEmpty() || userPass !== userPassVerification) {                   
            return res.render('register', { errors: errors.mapped(), old: req.body, passComparitionMsg: 'Las contraseñas no coinciden' });           
        }   

        let passEncripted = bcrypt.hashSync(userPass, 10);        
        let newUser = {
            ...req.body,
            password: passEncripted,                
            avatar: req.file != undefined ? req.file.filename : 'user-solid.svg', //Solo agrega esta propíedad en caso de que se cree agregue una imagen, sino pone una por default
            admin: false,
        };
        delete newUser.password_verification;   //Necesito borrar el password que se verifica, porque no está hasheado       
        await db.User.create(newUser);        
        return res.redirect("/");        
    },
    productCart: (req, res) => {
        //hacer un IF para que si el usuario está registrado o no, vaya a un lado especifico
        //hacer IF con sesion de usuario o redirigir a Register
        //hacer res.redirect a Login
        res.render('productCart')
    },
    logout: (req, res) => {
        res.clearCookie("recordarEmail");
        req.session.destroy();
        res.redirect('/');
    },
    listUsers: async (req, res) => {
        const users = await db.User.findAll();
        return res.send(users)
    }
};

module.exports = userController;
